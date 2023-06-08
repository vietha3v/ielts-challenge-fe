"use client";
import React from "react";
import ModalSearchAdvanced from "./ModalSearchAdvanced";
const skills = [
  { label: "Nghe", value: "listening" },
  { label: "Nói", value: "speaking" },
  { label: "Đọc", value: "reading" },
  { label: "Viết", value: "writing" },
  { label: "Ngữ pháp", value: "grammar" },
  { label: "Từ vựng", value: "vocabularu" },
];

const levels = [
  { label: ">7+", value: "listening" },
  { label: "6.0-6.5", value: "speaking" },
  { label: "5.0-5.5", value: "reading" },
  { label: "4.0-4.5", value: "writing" },
];

export default function SearchChallenge() {
  return (
    <div className="flex flex-row w-full justify-evenly">
      <div className="flex flex-row gap-4 px-4">
        <div className="form-control w-full max-w-xs col-span-1 justify-space-between">
          <label className="label"> Kĩ năng </label>
          <select className="select select-sm">
            {skills?.map((o) => (
              <option key={o?.value} value={o?.value} label={o?.label} />
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs col-span-1 justify-start">
          <label className="label"> Trình độ </label>
          <select className="select select-sm">
            {levels?.map((o) => (
              <option key={o?.value} value={o?.value} label={o?.label} />
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs col-span-1 justify-start">
          <label className="label"> Chủ đề </label>
          <input className="input input-sm w-full" />
        </div>

        <div className="form-control w-full max-w-xs col-span-1 justify-start">
          <label className="label"> Rating </label>
          <div className="rating">
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              checked
            />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
          </div>
        </div>

        <ModalSearchAdvanced />
      </div>
      <button className="btn btn-lg self-center">Tìm kiếm thử thách</button>
    </div>
  );
}
