import LeftMenu from "@/components/LeftMenu";
import React from "react";

export default function BasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row h-screen overflow-hidden justify-start">
      <LeftMenu />
      <div className="p-4 w-full h-full overflow-scroll">{children}</div>
    </div>
  );
}
