import SearchResult from "@/components/SearchChallenge/SearchResult";
import SearchChallenge from "@/components/SearchChallenge";

export const metadata = {
  title: "IELTS Challenge | Tìm kiếm thử thách",
};

export default function SearchPage() {
  return (
    <div className="flex flex-col justify-start align-top h-full w-screen px-4 overflow-hidden">
      <SearchChallenge />
      <SearchResult />
    </div>
  );
}
