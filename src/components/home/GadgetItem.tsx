import { CheckWhiteIcon } from "../shared/Icons";

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
      <div className="w-4 h-4 absolute top-2px right-3px rounded-full bg-primary-500 flex justify-center items-center">
        {updated && secondaryIcon}
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div>
          <div className="h-35px w-35px mb-1 bg-primary-200 rounded-full flex items-center justify-center mx-auto">
            {updated && rating == 10 ? (
              <div className="w-27.5px h-27.5px bg-primary-500 rounded-full flex items-center justify-center">
                <CheckWhiteIcon className="w-13.74px h-9.86px" />
              </div>
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
