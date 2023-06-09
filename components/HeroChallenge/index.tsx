"use client";

import { faker } from "@faker-js/faker";
import { intervalToDuration } from "date-fns";
import Image from "next/legacy/image";
import {
  CSSProperties,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const EndEvent = new Date(2023, 6, 30, 23, 59, 59);
const HeroChallenge = () => {
  const [banner, setBanner] = useState("");
  const [countdown, setCountDown] = useState<Duration>();
  const fakeData = useCallback(
    () =>
      faker.image.urlLoremFlickr({
        category: "exam",
        width: 1080,
        height: 200,
      }),
    []
  );

  useEffect(() => {
    const cdInterval = setInterval(() => {
      setCountDown(
        intervalToDuration({
          start: EndEvent,
          end: new Date(),
        })
      );
    }, 1000);
    return () => clearInterval(cdInterval);
  }, []);

  useEffect(() => {
    setBanner(fakeData);
  }, [fakeData]);

  return (
    <div className="card w-100 bg-base-100 shadow-xl image-full">
      <figure>
        <Image src={banner} alt="Monthly Challenge" layout="fill" />
      </figure>
      <div className="card-body">
        <h2 className="card-title self-center">Thử thách tháng 6!</h2>
        <div className="flex flex-row justify-center">
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span
                  id="counterElement"
                  style={{ "--value": countdown?.days } as CSSProperties}
                ></span>
              </span>
              ngày
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span
                  style={{ "--value": countdown?.hours } as CSSProperties}
                ></span>
              </span>
              giờ
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span
                  style={{ "--value": countdown?.minutes } as CSSProperties}
                ></span>
              </span>
              phút
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span
                  style={{ "--value": countdown?.seconds } as CSSProperties}
                ></span>
              </span>
              giây
            </div>
          </div>
        </div>
        <div className="card-actions justify-between">
          <label className="label label-sm self-end">
            Tổng giải thưởng lên tới 20,000,000$
          </label>
          <button className="btn btn-accent">Đăng kí tham gia</button>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroChallenge);
