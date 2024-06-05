import Image from "next/image";
import { Section } from "./Section";
import { Button } from "../custom/Button";
import { EyeIcon, TimerIcon } from "./Icons";

const Header = () => {
  return (
    <nav className="bg-white px-8 h-98px">
      <Section className="h-full">
        <div className="h-full flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <div className="relative w-63px h-62px">
              <Image
                src={"/assets/logos/getlinked_logo.svg"}
                alt="brand logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <div>
                <p className="text-xl font-medium text-black">
                  Frontend developer
                </p>
              </div>
              <div>
                <p className="text-sm font-normal text-blueGray-300">
                  Skill assessment test
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-x-2.5">
            <div>
              <Button className="w-178px bg-primary-300">
                <div className="flex gap-x-2.5 items-center">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary-200">
                    <TimerIcon className="h-4" />
                  </div>
                  <p className="text-primary-500 text-sm">
                    <span className="font-bold text-lg">29:10</span> time left
                  </p>
                </div>
              </Button>
            </div>
            <div className="w-30px h-30px flex items-center justify-center rounded-full bg-primary-200">
              <EyeIcon className="h-5" />
            </div>
          </div>
        </div>
      </Section>
    </nav>
  );
};

export default Header;
