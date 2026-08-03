"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Section } from "./Section";
import { Button } from "../custom/Button";
import { EyeIcon, TimerIcon } from "./Icons";

const INITIAL_SECONDS = 29 * 60 + 10;

const formatTimeLeft = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

const Header = () => {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);

  useEffect(() => {
    const endsAt = Date.now() + INITIAL_SECONDS * 1000;

    const tick = () => {
      const remaining = Math.max(0, Math.round((endsAt - Date.now()) / 1000));
      setSecondsLeft(remaining);
      return remaining;
    };

    tick();
    const intervalId = setInterval(() => {
      if (tick() === 0) clearInterval(intervalId);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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
                    <span className="font-bold text-lg">
                      {formatTimeLeft(secondsLeft)}
                    </span>{" "}
                    time left
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
