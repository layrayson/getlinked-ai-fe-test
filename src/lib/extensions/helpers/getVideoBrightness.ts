export function getVideoBrightness(
  videoRef: HTMLVideoElement,
  callback: (brightness: number) => void
): () => void {
  if (!videoRef) {
    console.error("Invalid video reference");
    return () => {};
  }

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) {
    console.error("Unable to get canvas context");
    return () => {};
  }

  // Downscale frames so brightness checks stay off the critical path
  const SAMPLE_WIDTH = 64;
  let interval: ReturnType<typeof setInterval> | null = null;

  const processFrame = () => {
    if (!videoRef.videoWidth || !videoRef.videoHeight) return;

    const aspectRatio = videoRef.videoHeight / videoRef.videoWidth;
    canvas.width = SAMPLE_WIDTH;
    canvas.height = Math.max(1, Math.round(SAMPLE_WIDTH * aspectRatio));

    ctx.drawImage(videoRef, 0, 0, canvas.width, canvas.height);

    try {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      let colorSum = 0;
      const pixelCount = canvas.width * canvas.height;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        colorSum += (r + g + b) / 3;
      }

      callback(Math.floor(colorSum / pixelCount));
    } catch (error) {
      console.error("Error getting image data", error);
    }
  };

  const startSampling = () => {
    processFrame();
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
      if (videoRef.paused || videoRef.ended) return;
      processFrame();
    }, 1000);
  };

  const onLoadedMetadata = () => startSampling();
  const onError = (e: Event) => {
    console.error("Video failed to load", e);
  };

  videoRef.addEventListener("loadedmetadata", onLoadedMetadata);
  videoRef.addEventListener("error", onError);

  if (videoRef.readyState >= HTMLMediaElement.HAVE_METADATA) {
    startSampling();
  }

  return () => {
    if (interval) clearInterval(interval);
    videoRef.removeEventListener("loadedmetadata", onLoadedMetadata);
    videoRef.removeEventListener("error", onError);
  };
}
