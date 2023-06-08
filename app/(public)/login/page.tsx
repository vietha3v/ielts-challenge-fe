"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const onSubmit = () => {
    router.push("/");
  };
  return (
    <div className="flex justify-center h-full">
      <div className="flex form-control w-full max-w-xs self-center justify-center">
        <label className="label">
          <span className="label-text">Email / Phone</span>
          {/* <span className="label-text-alt">Top Right label</span> */}
        </label>
        <input
          type="text"
          placeholder="User name"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text-alt"></span>
          <span className="label-text-alt">admin</span>
        </label>
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text-alt"></span>
          <span className="label-text-alt">admin</span>
        </label>
        <br />
        <button className="btn btn-success" onClick={onSubmit}>
          Login
        </button>
      </div>
    </div>
  );
}
