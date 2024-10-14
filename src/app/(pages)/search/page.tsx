import { Suspense } from "react";
import SearchInput from "./_components/SearchInput";
import SearchResults from "./_components/SearchResults";

const SearchPage = () => {
  return (
    <div className="h-screen w-screen">
      <SearchInput />

      <Suspense
        fallback={
          <div className="flex-center text-xl text-white">Loading...</div>
        }
      >
        <SearchResults />
      </Suspense>
    </div>
  );
};

export default SearchPage;
