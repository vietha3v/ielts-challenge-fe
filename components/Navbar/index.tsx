import ToggleFullscreen from "@/components/Navbar/toggleFullScreen";
import React from "react";
import Home from "./home";
import Pomodoro from "./pomodoro";
import Search from "./search";
import Challenge from "./challenge";

export default function ClientNarbar() {
  return (
    <div className="flex self-center">
      <ul className="menu menu-horizontal bg-base-100 rounded-box">
        <Home />
        <Search />
        <Challenge />
        <Pomodoro />
        <ToggleFullscreen />
      </ul>
    </div>
  );
}
