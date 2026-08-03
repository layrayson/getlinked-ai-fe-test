"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../custom/Button";
import {
  LampChargeIcon,
  LampChargeWhiteIcon,
  LoaderIcon,
  MicrophoneWhiteIcon,
  MonitorRecorderIcon,
  MonitorRecorderWhiteIcon,
  WifiIcon,
  WifiWhiteIcon,
} from "../shared/Icons";
import { GadgetItem } from "./GadgetItem";
import { StartAssessmentModal } from "./StartAssessmentModal";
import { useObjectDetection } from "@/lib/hooks/useObjectDetection";
import { useGetAccessoriesPermission } from "@/lib/hooks/useGetAccessoriesPermission";
import { useGetVideoBrightness } from "@/lib/hooks/useGetVideoBrightness";
import { useGetNetworkSpeed } from "@/lib/hooks/useGetNetworkSpeed";

const initGadgetState = [
  {
    id: "webcam",
    name: "Webcam",
    icon: <MonitorRecorderIcon className="h-18px w-18px" />,
    secondaryIcon: <MonitorRecorderWhiteIcon className="w-2 h-2" />,
    rating: 0,
    updated: false,
  },
  {
    id: "speed",
    name: "Speed",
    icon: <WifiIcon className="h-18px w-18px" />,
    secondaryIcon: <WifiWhiteIcon className="w-2.5 h-2.5" />,
    rating: 0,
    updated: false,
  },
  {
    id: "mic",
    name: "Gadget mic",
    icon: <MonitorRecorderIcon className="h-18px w-18px" />,
    secondaryIcon: <MicrophoneWhiteIcon className="w-2.5 h-2.5" />,
    rating: 0,
    updated: false,
  },
  {
    id: "lighting",
    name: "Lighting",
    icon: <LampChargeIcon className="h-18px w-18px" />,
    secondaryIcon: <LampChargeWhiteIcon className="w-2.5 h-2.5" />,
    rating: 0,
    updated: false,
  },
];

const SystemCheckGadgets = () => {
  const [gadgets, setGadgets] = useState(initGadgetState);
  const videoRef = useRef<HTMLVideoElement>(null);
  const checkErrorRef = useRef<string | null>(null);

  const [openStartAssessment, setOpenStartAssessment] = useState(false);
  const { startObjectDetection, stopObjectDetection, predictions } =
    useObjectDetection(videoRef);
  const { microphoneAccess, cameraAccess, mediaStream } =
    useGetAccessoriesPermission();
  const { videoBrightness } = useGetVideoBrightness(
    videoRef,
    Boolean(mediaStream)
  );
  const { speed } = useGetNetworkSpeed();
  const [checkError, setCheckError] = useState<string | null>(null);
  const [runningCheck, setRunningCheck] = useState(false);

  const handleCameraCheck = async () => {
    setRunningCheck(true);
    setCheckError(null);
    checkErrorRef.current = null;
    startObjectDetection();

    await new Promise((resolve) => setTimeout(resolve, 5000));

    stopObjectDetection();
    setRunningCheck(false);

    if (!checkErrorRef.current) {
      setOpenStartAssessment(true);
    }
  };

  const handlePredictions = useCallback(() => {
    if (predictions.length === 0) return;

    const nextError =
      predictions[0].class !== "person" ? predictions[0].class : null;

    checkErrorRef.current = nextError;
    setCheckError(nextError);
  }, [predictions]);

  const updateGadgets = ({ id, rating }: { id: string; rating: number }) => {
    setGadgets((prev) =>
      prev.map((gadget) =>
        gadget.id === id ? { ...gadget, rating, updated: true } : gadget
      )
    );
  };

  useEffect(() => {
    if (!mediaStream || !videoRef.current) return;
    videoRef.current.srcObject = mediaStream;
  }, [mediaStream]);

  useEffect(() => {
    if (cameraAccess == null) return;
    updateGadgets({ id: "webcam", rating: cameraAccess ? 10 : 0 });
  }, [cameraAccess]);

  useEffect(() => {
    if (microphoneAccess == null) return;
    updateGadgets({ id: "mic", rating: microphoneAccess ? 10 : 0 });
  }, [microphoneAccess]);

  useEffect(() => {
    if (videoBrightness == null) return;
    updateGadgets({ id: "lighting", rating: videoBrightness });
  }, [videoBrightness]);

  useEffect(() => {
    if (speed == null) return;
    updateGadgets({ id: "speed", rating: speed });
  }, [speed]);

  useEffect(() => {
    handlePredictions();
  }, [predictions, handlePredictions]);

  return (
    <div>
      <div className="flex gap-x-43px mb-10 items-center">
        <div className="w-264px h-168px">
          <div
            className={`w-full h-full rounded-10px overflow-hidden relative ${
              !checkError
                ? " border border-primary-500 "
                : "border-3px border-red-700"
            }`}
          >
            {checkError && (
              <div className="h-6 px-2.5 flex items-center bg-red-700/55 backdrop-opacity-45 w-fit rounded-5px absolute left-3px top-3px">
                <p className="text-white text-10px font-medium">
                  {" "}
                  <span className="capitalize">{checkError}</span> detected
                </p>
              </div>
            )}
            <video ref={videoRef} autoPlay muted playsInline />
          </div>
        </div>
        <div className="w-198px grid grid-cols-2 gap-4">
          {gadgets.map((gadget, index) => (
            <GadgetItem
              key={"gadget-" + index}
              rating={gadget.rating}
              icon={gadget.icon}
              name={gadget.name}
              secondaryIcon={gadget.secondaryIcon}
              updated={gadget.updated}
            />
          ))}
        </div>
      </div>
      <div>
        <Button
          onClick={handleCameraCheck}
          disabled={runningCheck}
          className={`bg-primary-500 text-white text-sm font-medium rounded-7px w-207px`}
        >
          {runningCheck ? (
            <LoaderIcon className="h-5 w-5 text-white animate-spin" />
          ) : (
            " Take picture and continue"
          )}
        </Button>
      </div>
      {openStartAssessment && !checkError && (
        <StartAssessmentModal
          isOpen={openStartAssessment}
          handleClose={() => setOpenStartAssessment(false)}
        />
      )}
    </div>
  );
};

export default SystemCheckGadgets;
