import React from "react";
import ClientNarbar from "@/components/Navbar";
import Notification from "@/components/Notification/notification";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-start h-screen w-full">
      <ClientNarbar />
      {children}
      <Notification />
    </div>
  );
}
