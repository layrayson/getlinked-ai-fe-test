import { RefObject, useEffect, useState } from "react";
import { getVideoBrightness } from "../extensions/helpers/getVideoBrightness";

export const useGetVideoBrightness = (
  videoRef: RefObject<HTMLVideoElement>,
  enabled = true
) => {
  const [videoBrightness, setVideoBrightness] = useState<number | null>(null);

  useEffect(() => {
    if (!enabled || !videoRef.current) return;

    const dispose = getVideoBrightness(videoRef.current, (b) => {
      setVideoBrightness((b / 255) * 10);
    });

    return dispose;
  }, [enabled, videoRef]);

  return {
    videoBrightness,
  };
};
