import { CircularProgress } from "../shared/CircularProgress";
import { CheckWhiteIcon, WarningRedIcon } from "../shared/Icons";

type Props = {
  rating: number;
  icon: JSX.Element;
  name: string;
  secondaryIcon: JSX.Element;
  updated: boolean;
};
export const GadgetItem = ({
  rating,
  icon,
  name,
  secondaryIcon,
  updated,
}: Props) => {
  return (
    <div className="w-full h-71px bg-primary-100 rounded-10px relative">
      <div
        className={`w-4 h-4 absolute top-2px right-3px rounded-full ${
          rating < 3 && updated ? "bg-red-500" : "bg-primary-500"
        } flex justify-center items-center`}
      >
        {updated && secondaryIcon}
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div>
          <div
            className={
              `h-35px w-35px mb-1 ${
                rating < 3 && updated ? "bg-red-100/10" : "bg-primary-200"
              } relative  border-transparent rounded-full flex items-center justify-center mx-auto ` +
              (rating == 10 ? "border-2 border-primary-500" : "")
            }
          >
            {updated && rating != 10 && (
              <div className="absolute w-full h-full">
                <CircularProgress progress={rating * 10} />
              </div>
            )}
            {updated && rating == 10 ? (
              <div className="w-27.5px h-27.5px bg-primary-500 rounded-full flex items-center justify-center">
                <CheckWhiteIcon className="w-13.74px h-9.86px" />
              </div>
            ) : rating < 3 && updated ? (
              <WarningRedIcon className="w-18px h-18px" />
            ) : (
              icon
            )}
          </div>
          <div>
            <p className="text-10px text-blueGray-700">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
