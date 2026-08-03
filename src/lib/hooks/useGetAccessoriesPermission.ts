import { useEffect, useState } from "react";

export const useGetAccessoriesPermission = () => {
  const [cameraAccess, setCameraAccess] = useState<boolean | null>(null);
  const [microphoneAccess, setMicrophoneAccess] = useState<boolean | null>(
    null
  );
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    let cameraStream: MediaStream | null = null;
    let cancelled = false;

    const getCameraAccess = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        if (cancelled) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        cameraStream = stream;
        setMediaStream(stream);
        setCameraAccess(true);
      } catch (error) {
        if (!cancelled) setCameraAccess(false);
      }
    };

    const getMicrophoneAccess = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        // Permission probe only — keep a single live stream for the preview
        stream.getTracks().forEach((track) => track.stop());
        if (!cancelled) setMicrophoneAccess(true);
      } catch (error) {
        if (!cancelled) setMicrophoneAccess(false);
      }
    };

    getCameraAccess();
    getMicrophoneAccess();

    return () => {
      cancelled = true;
      cameraStream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  return {
    microphoneAccess,
    cameraAccess,
    mediaStream,
  };
};
