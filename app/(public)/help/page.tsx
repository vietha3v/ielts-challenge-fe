import React from "react";

const questions = [
  {
    title: "IELTS Challenge là gì?",
    content: "Là dự án học tập IELTS qua những thử thách bla bla",
  },
  {
    title: "Tạo thử thách trên IELTS Challenge như thế nào??",
    content: "Là dự án học tập IELTS qua những thử thách bla bla",
  },
  {
    title: "Tìm kiếm thử thách như thế nào?",
    content: "Là dự án học tập IELTS qua những thử thách bla bla",
  },
];
export default function HelpPage() {
  return (
    <div className="flex flex-col gap-4 justify-start">
      {questions?.length &&
        questions.map((o, i) => (
          <div
            key={i}
            tabIndex={i}
            className="collapse collapse-plus rounded-lg border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">{o?.title}</div>
            <div className="collapse-content">
              <span>{o?.content}</span>
            </div>
          </div>
        ))}
    </div>
  );
}
