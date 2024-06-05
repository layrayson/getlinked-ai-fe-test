import { ReactNode } from "react";
import { AppModal } from "../custom/AppModal";
import { Button } from "../custom/Button";

type Props = {
  isOpen: boolean;
  handleClose?: () => void;
};
export const StartAssessmentModal = ({ isOpen, handleClose }: Props) => {
  return (
    <AppModal isOpen={isOpen} handleClose={handleClose}>
      <div>
        <div className="pt-7 pb-3 bg-primary-500">
          <div className="flex justify-between items-center pl-34px relative">
            <div>
              <p className="font-medium text-base text-white">
                Start assessment
              </p>
            </div>
            <div className="absolute right-6">
              <Button
                onClick={handleClose}
                className="bg-whiteSmoke/20 text-xs h-8 w-75px text-white"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
        <div className="pt-34px pb-50px bg-primary-100">
          <div className="max-w-335px mx-auto">
            <div>
              <h5 className="text-xl font-medium text-primary-500 text-center">
                Proceed to start assessment
              </h5>
            </div>
            <div>
              <p className="text-sm font-normal text-primary-400 text-center">
                {" "}
                Kindly keep to the rules of the assessment and sit up, stay in
                front of your camera/webcam and start your assessment.
              </p>
            </div>
          </div>
        </div>

        <div className="px-34px pt-19px pb-18px bg-white rounded-18px">
          <div className="flex items-center justify-end">
            <Button className="bg-primary-500 text-white rounded-7px w-140px">
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </AppModal>
  );
};
