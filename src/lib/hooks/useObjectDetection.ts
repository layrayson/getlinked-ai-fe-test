import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import { RefObject, useEffect, useRef, useState } from "react";

export const useObjectDetection = (videoRef: RefObject<HTMLVideoElement>) => {
  const [predictions, setPredictions] = useState<cocoSsd.DetectedObject[]>([]);
  const detectionIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startObjectDetection = async () => {
    const intervalId = setInterval(predictObject, 500);
    detectionIntervalRef.current = intervalId;
  };

  const predictObject = async () => {
    const model = await cocoSsd.load();
    if (!videoRef.current) return;

    model
      .detect(videoRef.current)
      .then((predictions) => {
        setPredictions(predictions);
      })

      .catch((err) => {});
  };

  const stopObjectDetection = () => {
    if (detectionIntervalRef.current) {
      clearInterval(detectionIntervalRef.current);
      detectionIntervalRef.current = null;
    }
  };

  return {
    startObjectDetection,
    stopObjectDetection,
    predictions,
  };
};
