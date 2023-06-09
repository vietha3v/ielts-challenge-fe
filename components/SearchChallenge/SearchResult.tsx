"use client";
import CardChallengeItem, {
  CardChallengeItemProps,
} from "@/components/CardChallengeItem";
import { faker } from "@faker-js/faker";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

export default function SearchResult() {
  const [list, setList] = useState<any>();
  const [data, setData] = useState<CardChallengeItemProps>({});
  const pathname = usePathname();
  const mine = pathname === "/challenge/me";
  const fakeData = useCallback(
    () => ({
      title:
        "Thử thách " +
        faker.string.alpha({
          length: { max: 5, min: 2 },
        }),
      star: Math.floor(Math.random() * 5),
      imageUrl: faker.image.urlLoremFlickr({
        category: "students",
        width: 300,
        height: 200,
      }),
      description: faker.lorem.lines(2),
      band: Math.floor(Math.random() * 9),
      author: faker.person.fullName(),
      countPlay: faker.number.int(1000),
      progress: faker.number.int(100),
      buy: mine ? true : faker.datatype.boolean(),
      coin: faker.number.int(10),
    }),
    [mine]
  );

  useEffect(() => {
    setList(() =>
      new Array(Math.floor(Math.random() * 100) + 1)
        .fill(0)
        ?.map(() => fakeData())
    );
  }, [fakeData]);

  if (!list?.length) return null;
  return (
    <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-4 my-4 overflow-y-auto">
      {list?.length &&
        list.map(
          (
            o: CardChallengeItemProps | undefined,
            i: React.Key | null | undefined
          ) => <CardChallengeItem data={o} key={i} />
        )}
    </div>
  );
}
