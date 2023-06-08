"use client";
import Link from "next/link";
import React from "react";
import { faker } from "@faker-js/faker";

export default function YourInfo() {
  return (
    <li className="group/item rounded-sm">
      <Link
        href={"/profile/me"}
        className="flex flex-row justify-between w-full "
      >
        <div className="avatar online">
          <div className="w-16 rounded-lg">
            <img src={faker.internet.avatar()} />
          </div>
        </div>
        <div className="group/edit group-hover/item:visible flex flex-col w-full overflow-x-hidden">
          <label className="label"> VieHa</label>
          <div className="flex flex-col h-20 gap-1">
            <progress
              className="progress progress-accent"
              value={60}
              max="100"
            ></progress>
            <progress
              className="progress progress-secondary"
              value="65"
              max="100"
            ></progress>
            <progress
              className="progress progress-success"
              value="40"
              max="100"
            ></progress>
            <progress
              className="progress progress-warning"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
      </Link>
    </li>
  );
}
