"use client";
import { listNotis } from "@/components/Notification/notification";
import Tabs from "@/components/Tabs";
import React from "react";

export default function InboxPage() {
  return (
    <div className="flex flex-col h-full">
      <Tabs
        keyQuery="r"
        items={[
          {
            href: "notis",
            content: (
              <span>
                Thông báo
                <div className="badge badge-sm">12</div>
              </span>
            ),
          },
          {
            href: "fans",
            content: <span>Thư hâm mộ</span>,
            defaultActive: true,
          },
          {
            href: "motivation",
            content: <span>Thư cổ vũ</span>,
          },
          {
            href: "connect",
            content: <span>Thư giao lưu</span>,
          },
        ]}
      />
      <div className="grid grid-cols-1 mt-2">
        {listNotis?.length &&
          listNotis.map((o) => (
            <div
              key={Math.random()}
              className="mt-2 col-span-1 rounded-xl bg-base-200"
            >
              {o?.message}
            </div>
          ))}
      </div>
    </div>
  );
}
