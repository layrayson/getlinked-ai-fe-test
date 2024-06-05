import { RefObject, useEffect, useRef, useState } from "react";
import { getVideoBrightness } from "../extensions/helpers/getVideoBrightness";

export const useGetVideoBrightness = (
  videoRef: RefObject<HTMLVideoElement>
) => {
  const [videoBrightness, setVideoBrightness] = useState<number | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    getVideoBrightness(videoRef.current!, (b) => {
      setVideoBrightness(b);
    });
  }, []);

  return {
    videoBrightness,
  };
};
