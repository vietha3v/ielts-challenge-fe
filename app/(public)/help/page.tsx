import React from "react";

const questions = [
  {
    title: "IELTS Challenge là gì?",
    content:
      "IELTS Challenge là platform học tập, giúp học sinh tích luỹ, tôi luyện, hoàn thiện kỹ năng IELTS nhanh hơn, vui hơn thông qua các thử thách học tập.",
  },
  {
    title: "Sứ mệnh phát triển của IELTS Challenge?",
    content:
      "<p>Số hoá 100% các chương trình học, xây dựng dựa trên các kỹ thuật, phương pháp học tập, công nghệ giáo dục tiên tiến.</p> </p>Tạo ra sự công bằng: dễ dàng tiếp cận từ mọi nơi, dành cho mọi người với chi phí thấp. </p><p> Vượt ra khỏi định kiến IELTS chỉ là chứng chỉ, biến việc học tiếng anh trở thành quá trình tích lũy kiến thức xã hội, tiếp cận văn hoá, tri thức nhân loại. </p>",
  },
  {
    title: "IELTS Challenge xây dựng tầm nhìn",
    content:
      "Trở thành 1 global platform học tập hiệu quả, thông minh, phục vụ hàng tỷ người dùng",
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
