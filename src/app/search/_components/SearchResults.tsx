"use client";

import MediaSliderItem from "@/features/SliderItem/MediaSliderItem";
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
        className="grid h-fit w-full grid-cols-8 gap-4 p-4"
        parentId="search-page-results"
        {...infiniteScrollResults}
      >
        {items.map((item) => (
          <MediaSliderItem
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
