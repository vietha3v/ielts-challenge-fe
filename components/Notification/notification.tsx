"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const listNotis = [
  {
    type: "alert-success",
    message: (
      <div className="alert alert-info shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info flex-shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <h3 className="font-bold">Thử thách mới!</h3>
            <div className="text-xs">
              Hà Phạm vừa tạo thử thách học 100 từ vựng trong 3 ngày mới!
            </div>
          </div>
        </div>
        <div className="flex-none">
          <Link href={"/search"}>
            <button className="btn btn-sm">Xem ngay</button>
          </Link>
        </div>
      </div>
    ),
  },
  {
    message: (
      <div className="alert alert-success shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info flex-shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Bạn đã hoàn thành 12 thử thách trong tháng này.</span>
        </div>
        <div className="flex-none">
          <Link className="link" href="/report">
            <button className="btn btn-sm">Xem báo cáo</button>
          </Link>
        </div>
      </div>
    ),
  },
  //   {
  //     message: "",
  //   },
  //   {
  //     type: "alert-warning",
  //     message: "Viet Ha ơi 3 hôm nay cậu chưa luyện nói nhé! :(",
  //   },
  //   {
  //     type: "alert-info",
  //     message: "Mrs.Thảo vừa ra thử thách học 100 từ vựng trong 7 ngày mới!",
  //   },
  //   {
  //     type: "alert-success",
  //     message: "Hà Phạm vừa hoàn thành thử thách Đọc 6.5 bạn mời!",
  //   },
  //   {
  //     type: "alert-error",
  //     message: "Còn 2 ngày nữa hết hạn thử thách Writing đó.",
  //   },
  //   {
  //     type: "alert-success",
  //     message:
  //       "Bạn đã thật chăm chỉ hoàn thành 10 thử thách trong tháng này, tiếp tục phát huy nhé!!!",
  //   },
];

export default function Notification() {
  const [noti, setNoti] = useState<{
    type?: string;
    message?: React.ReactNode;
  }>();

  useEffect(() => {
    const fakeNoti = setInterval(() => {
      setNoti(listNotis?.[Math.floor(Math.random() * listNotis?.length)]);
    }, 3000);
    return () => clearInterval(fakeNoti);
  }, []);
  return null;
  if (!noti?.message) return null;
  return <div className="toast">{noti?.message}</div>;
}
