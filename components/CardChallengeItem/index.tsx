"use client";
import { CSSProperties } from "react";
import Image from "next/legacy/image";
export interface CardChallengeItemProps {
  title?: string;
  imageUrl?: string;
  description?: string;
  star?: number;
  band?: number;
  coin?: number;
  author?: string;
  countPlay?: number;
  progress?: number;
  buy?: boolean;
}

export default function CardChallengeItem({
  data,
}: {
  data?: CardChallengeItemProps;
}) {
  return (
    <div
      className="col-span-1 card h-60 bg-base-100 shadow-xl image-full overflow-hidden"
      data-tip={data?.description}
    >
      <figure>
        <Image
          src={data?.imageUrl ?? ""}
          alt={data?.title}
          className="object-cover"
          layout="fill"
        />
      </figure>
      <div className="card-body p-4 overflow-hidden">
        <form className="form">
          <input
            className="input input-sm bg-none"
            disabled
            value={data?.title}
          />
        </form>

        <div className="flex flex-row justify-between">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <div
                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                style={
                  { "--value": data?.buy ? data?.progress : 0 } as CSSProperties
                }
              >
                {data?.buy ? `${data?.progress} %` : `${data?.coin}$`}
              </div>
            </div>
            <div className="stat-title">Lượt tham gia</div>
            <div className="stat-value">{data?.countPlay}</div>
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2"
              />
            </div>
            <div className="stat-desc">
              <span className="mt-1 text-orange-600">
                IETLS {Number(data?.band) > 5 ? data?.band : "5.5"}+
              </span>
            </div>
          </div>
        </div>
        <div className="card-actions absolute bottom-4 right-4 justify-end">
          {data?.buy ? (
            <button className="btn btn-warning">Thực hiện</button>
          ) : (
            <button className="btn btn-accent">Đăng kí</button>
          )}
        </div>
      </div>
    </div>
  );
}
