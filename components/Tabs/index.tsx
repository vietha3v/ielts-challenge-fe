"use client";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import React from "react";

interface TabsItemProps {
  href: string;
  content?: React.ReactNode;
  defaultActive?: boolean;
}
export default function Tabs({
  items,
  keyQuery,
}: {
  items: Array<TabsItemProps>;
  keyQuery: string;
}) {
  const keyActive =
    (useSearchParams().get(keyQuery ?? "") ||
      items?.filter((o) => o.defaultActive)?.[0]?.href) ??
    "";
  const pathname = usePathname();
  const params = useParams();
  return (
    <div className="tabs gap-1 w-fit tabs-boxed self-center">
      {items?.length &&
        items.map((o) => (
          <Link
            className={`tab ${o?.href === keyActive ? "tab-active" : ""}`}
            key={Math.random()}
            href={{
              pathname,
              query: { ...params, [keyQuery]: o?.href },
            }}
          >
            {" "}
            {o?.content}{" "}
          </Link>
        ))}
    </div>
  );
}
