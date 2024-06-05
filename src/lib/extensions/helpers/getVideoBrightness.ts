export function getVideoBrightness(
  videoRef: HTMLVideoElement,
  callback: (brightness: number) => void
): void {
  if (!videoRef) {
    console.error("Invalid video reference");
    return;
  }

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    console.error("Unable to get canvas context");
    return;
  }

  const processFrame = () => {
    canvas.width = videoRef.videoWidth;
    canvas.height = videoRef.videoHeight;

    ctx.drawImage(videoRef, 0, 0, canvas.width, canvas.height);

    try {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      let colorSum = 0;

      for (let x = 0; x < data.length; x += 4) {
        const r = data[x];
        const g = data[x + 1];
        const b = data[x + 2];

        const avg = Math.floor((r + g + b) / 3);
        colorSum += avg;
      }

      const brightness = Math.floor(colorSum / (canvas.width * canvas.height));
      callback(brightness);
    } catch (error) {
      console.error("Error getting image data", error);
    }
  };

  videoRef.addEventListener("loadedmetadata", () => {
    processFrame();
    const interval = setInterval(() => {
      if (videoRef.paused || videoRef.ended) {
        clearInterval(interval);
        return;
      }
      processFrame();
    }, 1000);
  });

  videoRef.addEventListener("error", (e) => {
    console.error("Video failed to load", e);
  });

  videoRef.load();
}
