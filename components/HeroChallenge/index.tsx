"use client";

import { faker } from "@faker-js/faker";
import { useCallback, useEffect, useState } from "react";

export default function HeroChallenge() {
  const [banner, setBanner] = useState("");
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
    setBanner(fakeData);
  }, []);
  return (
    <div className="card w-100 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={banner} alt="Monthly Challenge" />
      </figure>
      <div className="card-body">
        <h2 className="card-title self-center">Thử thách tháng 6!</h2>
        <div className="flex flex-row justify-center">
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 1 }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 10 }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 24 }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 50 }}></span>
              </span>
              sec
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
}
