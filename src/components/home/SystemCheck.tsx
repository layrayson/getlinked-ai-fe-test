import SystemCheckGadgets from "./SystemCheckGadgetsPane";

const SystemCheck = () => {
  return (
    <div className="max-w-832px bg-white rounded-20px py-9 px-12 mx-auto">
      <div>
        <div className="mb-2">
          <h5 className="font-medium text-xl text-black">System Check</h5>
        </div>
        <div className="mb-30px">
          <p className="font-normal text-sm text-blueGray-700">
            We utilize your camera image to ensure fairness for all
            participants, and we also employ both your camera and microphone for
            a video questions where you will be prompted to record a response
            using your camera or webcam, so it&apos;s essential to verify that
            your camera and microphone are functioning correctly and that you
            have a stable internet connection. To do this, please position
            yourself in front of your camera, ensuring that your entire face is
            clearly visible on the screen. This includes your forehead, eyes,
            ears, nose, and lips. You can initiate a 5-second recording of
            yourself by clicking the button below.
          </p>
        </div>
        <div>
          <SystemCheckGadgets />
        </div>
      </div>
    </div>
  );
};

export default SystemCheck;
