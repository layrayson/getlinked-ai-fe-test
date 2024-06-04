"use client";
import { useState } from "react";
import { Button } from "../custom/Button";
import {
  LampChargeIcon,
  LampChargeWhiteIcon,
  MicrophoneWhiteIcon,
  MonitorRecorderIcon,
  MonitorRecorderWhiteIcon,
  WifiIcon,
  WifiWhiteIcon,
} from "../shared/Icons";
import { GadgetItem } from "./GadgetItem";
import { tree } from "next/dist/build/templates/app-page";
import { StartAssessmentModal } from "./StartAssessmentModal";

const ObjectDetectionComponent = () => {
  const gadgets = [
    {
      name: "Webcam",
      icon: <MonitorRecorderIcon className="h-18px w-18px" />,
      secondaryIcon: <MonitorRecorderWhiteIcon className="w-2 h-2" />,
      rating: 0,
      activated: false,
    },
    {
      name: "Speed",
      icon: <WifiIcon className="h-18px w-18px" />,
      secondaryIcon: <WifiWhiteIcon className="w-2.5 h-2.5" />,
      rating: 0,
      activated: false,
    },
    {
      name: "Gadget mic",
      icon: <MonitorRecorderIcon className="h-18px w-18px" />,
      secondaryIcon: <MicrophoneWhiteIcon className="w-2.5 h-2.5" />,
      rating: 0,
      activated: false,
    },
    {
      name: "Lighting",
      icon: <LampChargeIcon className="h-18px w-18px" />,
      secondaryIcon: <LampChargeWhiteIcon className="w-2.5 h-2.5" />,
      rating: 0,
      activated: false,
    },
  ];

  const [openStartAssessment, setOpenStartAssessment] = useState(false);
  return (
    <div>
      <div className="flex gap-x-43px mb-10 items-center">
        <div className="w-264px h-168px">
          <div className="w-full h-full border border-primary-500 rounded-10px"></div>
        </div>
        <div className="w-198px grid grid-cols-2 gap-4">
          {gadgets.map((gadget, index) => (
            <GadgetItem
              key={"gadget-" + index}
              rating={0}
              icon={gadget.icon}
              name={gadget.name}
              secondaryIcon={gadget.secondaryIcon}
              activated={gadget.activated}
            />
          ))}
        </div>
      </div>
      <div>
        <Button
          onClick={() => setOpenStartAssessment(true)}
          className="bg-primary-500 text-white text-sm font-medium rounded-7px w-207px"
        >
          Take picture and continue
        </Button>
      </div>
      {openStartAssessment && (
        <StartAssessmentModal
          isOpen={openStartAssessment}
          handleClose={() => setOpenStartAssessment(false)}
        />
      )}
    </div>
  );
};

export default ObjectDetectionComponent;
