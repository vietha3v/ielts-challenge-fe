"use client";
import React from "react";
export default function ModalSearchAdvanced() {
  return (
    <>
      <button className="btn btn-square self-end">
        <label htmlFor="modal-search-advanced" className="btn">
          ...
        </label>
      </button>
      <input
        type="checkbox"
        id="modal-search-advanced"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Tiêu chí nâng cao</h3>
          <div className="py-4 w-full grap grap-col-span">
            <div className="form-control col-span-1 justify-start">
              <label className="label"> Tác giả </label>
              <input className="input w-full input-sm bg-slate-600" />
            </div>
            <div className="form-control col-span-1 justify-start">
              <label className="label">Từ khoá </label>
              <input className="input input-sm w-full bg-slate-600" />
            </div>
            <div className="form-control w-full col-span-1 justify-start">
              <label className="label"> Thời gian</label>
              <input
                type="range"
                min={0}
                max="100"
                className="range"
                step={100 / 8}
              />
              <div className="w-full flex justify-between text-xs px-2">
                <span>5m</span>
                <span>10m</span>
                <span>15m</span>
                <span>30m</span>
                <span>1h</span>
                <span>4h</span>
                <span>1d</span>
                <span>3d</span>
                <span>1w</span>
              </div>
            </div>
            <div className="form-control w-full col-span-1 justify-start">
              <label className="label"> Chi phí</label>
              <input
                type="range"
                min={0}
                max="100"
                className="range"
                step={100 / 4}
              />
              <div className="w-full flex justify-between text-xs px-2">
                <span>Free</span>
                <span>1$</span>
                <span>2$</span>
                <span>4$</span>
                <span>10$</span>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <label
              htmlFor="modal-search-advanced"
              className="btn btn-lg self-center"
            >
              Tìm kiếm thử thách
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
