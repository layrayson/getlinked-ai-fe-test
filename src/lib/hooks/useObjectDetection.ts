import { RefObject, useEffect, useRef, useState } from "react";
import type {
  DetectedObject,
  ObjectDetection,
} from "@tensorflow-models/coco-ssd";

export const useObjectDetection = (videoRef: RefObject<HTMLVideoElement>) => {
  const [predictions, setPredictions] = useState<DetectedObject[]>([]);
  const detectionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const modelRef = useRef<ObjectDetection | null>(null);
  const isRunningRef = useRef(false);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
      isRunningRef.current = false;
      if (detectionTimeoutRef.current) {
        clearTimeout(detectionTimeoutRef.current);
        detectionTimeoutRef.current = null;
      }
    };
  }, []);

  const loadModel = async () => {
    if (modelRef.current) return modelRef.current;

    await import("@tensorflow/tfjs");
    const cocoSsd = await import("@tensorflow-models/coco-ssd");
    modelRef.current = await cocoSsd.load();
    return modelRef.current;
  };

  const predictObject = async () => {
    if (!isRunningRef.current || !videoRef.current) return;

    try {
      const model = await loadModel();
      if (!isRunningRef.current || !videoRef.current) return;

      const nextPredictions = await model.detect(videoRef.current);
      if (isMountedRef.current && isRunningRef.current) {
        setPredictions(nextPredictions);
      }
    } catch {
      // ignore transient detection failures
    }

    if (isRunningRef.current) {
      detectionTimeoutRef.current = setTimeout(predictObject, 500);
    }
  };

  const startObjectDetection = async () => {
    if (isRunningRef.current) return;
    isRunningRef.current = true;
    await predictObject();
  };

  const stopObjectDetection = () => {
    isRunningRef.current = false;
    if (detectionTimeoutRef.current) {
      clearTimeout(detectionTimeoutRef.current);
      detectionTimeoutRef.current = null;
    }
  };

  return {
    startObjectDetection,
    stopObjectDetection,
    predictions,
  };
};
