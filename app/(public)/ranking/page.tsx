import Tabs from "@/components/Tabs";
import React from "react";
import TableRanking from "../../../components/TableRanking";

export default function RankingPage() {
  return (
    <div className="flex flex-col w-full h-full">
      <Tabs
        keyQuery={"t"}
        items={[
          {
            href: "date",
            content: <span> Ngày</span>,
          },
          {
            href: "week",
            content: <span> Tuần</span>,
            defaultActive: true,
          },
          {
            href: "month",
            content: <span> Tháng</span>,
          },
          {
            href: "year",
            content: <span>Năm</span>,
          },
        ]}
      />
      <div className="my-4 overflow-auto">
        <TableRanking />
      </div>
    </div>
  );
}
