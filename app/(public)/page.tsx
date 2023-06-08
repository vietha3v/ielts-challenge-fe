"use client";
import HeroChallenge from "@/components/HeroChallenge";
import Tabs from "@/components/Tabs";
import { useSearchParams } from "next/navigation";
import TableRanking from "@/components/TableRanking";
import GlobalChatting from "@/components/GlobalChatting";

export default function HomePage() {
  const keyActive = useSearchParams().get("r");
  const genContentHomePage = () => {
    switch (keyActive) {
      case "news":
        return null;
      case "community":
        return <GlobalChatting />;
      case "honors":
        return <TableRanking />;
      default:
        return <GlobalChatting />;
    }
  };
  return (
    <div className="flex flex-col justify-start gap-4 w-full h-full">
      <HeroChallenge />
      <div className="flex flex-col h-full">
        <Tabs
          keyQuery="r"
          items={[
            {
              href: "news",
              content: <span> Tin Tức</span>,
            },
            {
              href: "community",
              content: <span>Cộng đồng</span>,
              defaultActive: true,
            },
            {
              href: "honors",
              content: <span> Vinh danh</span>,
            },
          ]}
        />
        <div className="my-4">{genContentHomePage()}</div>
      </div>
    </div>
  );
}
