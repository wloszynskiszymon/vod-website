"use client";

import Poster from "@/features/poster/Poster";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { useSearchParams } from "next/navigation";
import InfiniteScrollContainer from "./InfiniteScrollContainer";

const SearchResults = () => {
  const params = useSearchParams();
  const query = params?.get("q");
  const infiniteScrollResults = useInfiniteScroll(query || "");
  const items =
    infiniteScrollResults.data?.pages.flatMap((page) => page.results) || [];

  return (
    <section
      id="search-page-results"
      className="h-full w-full translate-y-28 overflow-y-auto"
    >
      <InfiniteScrollContainer
        className="grid h-fit w-full grid-cols-2 gap-4 p-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8"
        parentId="search-page-results"
        {...infiniteScrollResults}
      >
        {items.map((item) => (
          <Poster
            className="h-full"
            imageType="poster"
            key={item.title + item.id}
            {...item}
          />
        ))}
      </InfiniteScrollContainer>
    </section>
  );
};

export default SearchResults;
