import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Tạo thử thách",
};

const ChallengeTypes = [
  {
    href: "/challenge/create/voca",
    title: "Từ vựng",
    content: (
      <span>
        <button className="btn btn-sm btn-info">
          <Link href={"/profile/vieha"}>Việt Hà </Link>
        </button>{" "}
        là thành viên ưu tú nhất. Thành viên đã học 1,254 từ vựng band 6.0 trong
        tuần qua
      </span>
    ),
    image: "#",
  },
  {
    href: "/challenge/create/grammar",
    title: "Ngữ pháp",
    content: <p>10 đứa làm ngữ pháp sai đến 9 câu :3.</p>,
    image: "#",
  },
  {
    href: "/challenge/create/listening",
    title: "Nghe",
    content: (
      <p>
        Thử thách nghe BBC, VOA, PodCast cùng với bạn bè luôn có sự thú vị, lôi
        kéo người tham gia.
      </p>
    ),
    image: "#",
  },
  {
    href: "/challenge/create/speaking",
    title: "Nói",
    content: <p>Thử thách này tạo cho những người hướng nội :V </p>,
    image: "#",
  },
  {
    href: "/challenge/create/reading",
    title: "Đọc",
    content: (
      <p>Đọc sách, đọc báo hàng ngày tăng vốn kiến thức, phong phú từ vựng.</p>
    ),
    image: "#",
  },
  {
    href: "/challenge/create/writing",
    title: "Viết",
    content: (
      <p>
        Có 251 thử thách viết đã được tạo trong tháng này, tiếp cận 1000 lượt
        tham gia
      </p>
    ),
    image: "#",
  },
];
export default function CreateChallenge() {
  return (
    <div className="grid grid-cols-3 gap-4 justify-center">
      {ChallengeTypes?.length &&
        ChallengeTypes.map((o) => (
          <div
            key={Math.random()}
            className="card w-full h-300 bg-base-100 shadow-xl image-full disabled"
          >
            <figure>{/* <img src="#" alt="Writing" /> */}</figure>
            <div className="card-body flex flex-col justify-between">
              <h2 className="card-title">{o?.title}</h2>
              <div className="max-h-20 text-ellipsis overflow-hidden">
                {o?.content}
              </div>
              <div className="card-actions flex flex-row whitespace-nowrap justify-between">
                <Link href={"/help"} className="self-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                </Link>
                <button className="btn btn-active">
                  <Link href={o?.href} passHref>
                    Tạo thử thách
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
