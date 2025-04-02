import { Suspense } from "react";
import SearchInput from "./_components/SearchInput";
import SearchResults from "./_components/SearchResults";

const SearchPage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Suspense
        fallback={
          <div className="flex-center text-xl text-white">Loading...</div>
        }
      >
        <SearchInput />
        <SearchResults />
      </Suspense>
    </div>
  );
};

export default SearchPage;
