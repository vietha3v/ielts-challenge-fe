"use client";
import { faker } from "@faker-js/faker";
import Image from "next/legacy/image";
import React, { useCallback, useEffect, useState } from "react";

interface RankingItemProps {
  name?: string;
  avatar?: string;
  band?: number;
  challengeCount?: string | number;
}
export default function TableRanking() {
  const [data, setData] = useState<Array<RankingItemProps>>();
  const fakeData = useCallback(
    () =>
      new Array(5)
        .fill(0)
        .map((o, i) => ({
          key: i,
          name: faker.person.fullName(),
          avatar: faker.internet.avatar(),
          band: Math.floor(Math.random() * 9),
          challengeCount: Math.floor(Math.random() * 30),
        }))
        .sort((a, b) => b.challengeCount - a.challengeCount),
    []
  );

  useEffect(() => {
    setData(fakeData());
  }, [fakeData]);

  return (
    <div className="flex flex-row w-full justify-center">
      <table className="table table-sm w-2/3 table-pin-rows">
        <thead>
          <tr>
            <th>STT</th>
            <th></th>
            <th>Tên</th>
            <th>Band</th>
            <th>Thử thách vượt qua</th>
          </tr>
        </thead>
        <tbody>
          {data?.length &&
            data.map((o, i) => (
              <tr key={i} className="hover:bg-orange-200">
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <Image
                        src={o?.avatar ?? ""}
                        alt={o?.name}
                        layout="fill"
                      />
                    </div>
                  </div>
                </td>
                <td>{o?.name}</td>
                <td>{Number(o?.band) > 5 ? o?.band : "5.5"}</td>
                <td className="self-center text-center">{o?.challengeCount}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
