"use client";

interface ChampionTreeProps {
  name?: string;
  band?: number;
  point?: number;
  isWinner?: boolean;
  isChampioner?: boolean;
  round?: number;
  items?: ChampionTreeProps[];
}
const winners = {
  name: "Hoa Pham",
  band: 7,
  point: 879,
  isWinner: true,
  isChampioner: true,
  round: 9,
  items: [
    {
      name: "Hoa Pham",
      band: 7,
      point: 669,
      isWinner: true,
      round: 8,
      items: [
        {
          name: "Hoa Pham",
          band: 7,
          point: 510,
          isWinner: true,
          round: 7,
          items: [
            {
              name: "Hoa Pham",
              band: 7,
              point: 410,
              isWinner: true,
              round: 6,
            },
            {
              name: "Tu Nguyen",
              band: 6.5,
              point: 440,
              isWinner: false,
              round: 6,
            },
          ],
        },
        {
          name: "Thao Ha",
          band: 6.5,
          point: 540,
          isWinner: false,
          round: 7,
          items: [
            {
              name: "Thao Ha",
              band: 6.5,
              point: 410,
              isWinner: true,
              round: 6,
            },
            {
              name: "Tu Nguyen",
              band: 6.5,
              point: 440,
              isWinner: false,
              round: 6,
            },
          ],
        },
      ],
    },
    {
      name: "Phu Bui",
      band: 7.5,
      point: 779,
      isWinner: false,
      round: 8,
      items: [
        {
          name: "Phu Bui",
          band: 7.5,
          point: 510,
          isWinner: true,
          round: 7,
          items: [
            {
              name: "Phu Bui",
              band: 7.5,
              point: 410,
              isWinner: true,
              round: 6,
            },
            {
              name: "Tu Nguyen",
              band: 6.5,
              point: 440,
              isWinner: false,
              round: 6,
            },
          ],
        },
        {
          name: "Ha Pham",
          band: 8.5,
          point: 560,
          isWinner: false,
          round: 7,
          items: [
            {
              name: "Ha Pham",
              band: 8.5,
              point: 410,
              isWinner: true,
              round: 6,
            },
            {
              name: "Tu Nguyen",
              band: 6.5,
              point: 440,
              isWinner: false,
              round: 6,
            },
          ],
        },
      ],
    },
  ],
};

export default function ChampionTree() {
  const generateTableTree = (data: ChampionTreeProps[]) => {
    if (!data?.length) return null;
    return (
      <div className={`grid grid-cols-${data?.length} gap-4 mt-4`}>
        {data?.map((o, i) => (
          <>
            <div
              key={i}
              className={`${
                o?.isWinner ? "bg-yellow-500" : "bg-gray-400"
              }  rounded-lg p-2 flex flex-row whitespace-nowrap min-w-[200px] max-w-sm justify-center text-center self-center gap-4`}
            >
              {o?.name}
              <div className="badge border-none bg-red-600">{o?.point}</div>
            </div>
            <div>{o?.items?.length && generateTableTree(o?.items)}</div>
          </>
        ))}
      </div>
    );
  };

  const generateChampionerTree = (data: ChampionTreeProps) => {
    if (data?.isChampioner)
      return (
        <>
          <div className="flex flex-col w-full justify-center">
            <svg
              fill="white"
              stroke="orange"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-20 h-20 self-center mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
              />
            </svg>
            <div className="flex flex-row justify-center items-center uppercase font-extrabold p-4 gap-4 w-[300px] min-w-fit self-center rounded-lg bg-yellow-500 ">
              {data?.name}
              <div className="badge border-none bg-red-600">{data?.point}</div>
            </div>
          </div>
          {data?.items?.length && generateTableTree(data?.items)}
        </>
      );
    return null;
  };

  return generateChampionerTree(winners);
}
