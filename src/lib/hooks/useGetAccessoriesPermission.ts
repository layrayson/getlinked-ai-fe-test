import { useEffect, useState } from "react";

export const useGetAccessoriesPermission = () => {
  const [cameraAccess, setCameraAccess] = useState<boolean | null>(null);
  const [microphoneAccess, setMicrophoneAccess] = useState<boolean | null>(
    null
  );

  const getCameraAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      setCameraAccess(true);
    } catch (error) {
      setCameraAccess(false);
    }
  };

  const getMicrophoneAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicrophoneAccess(true);
    } catch (error) {
      setMicrophoneAccess(false);
    }
  };

  useEffect(() => {
    getCameraAccess();
    getMicrophoneAccess();
  }, []);

  return {
    microphoneAccess,
    cameraAccess,
  };
};
