"use client";
import { redirect, usePathname } from "next/navigation";

export default function ChallengePage() {
  const pathname = usePathname();
  if (pathname === "/challenge") {
    redirect("/search");
  }
  return null;
}
