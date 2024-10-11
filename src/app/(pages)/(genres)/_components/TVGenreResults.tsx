"use client";
import MediaSliderItem from "@/features/SliderItem/MediaSliderItem";
import { cn } from "@/utilities/utils";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React from "react";
import InfiniteScrollContainer from "../../search/_components/InfiniteScrollContainer";

type TVGenreResultsProps = React.HTMLProps<HTMLDivElement>;

const TVGenreResults = ({ className = "", ...props }: TVGenreResultsProps) => {
  const params = useSearchParams();
  const genreId = params?.get("genre");
  const results = useInfiniteQuery({
    queryKey: [`tv-by-genre-results`, genreId],
    queryFn: ({ pageParam = 1 }) =>
      fetch(`/api/tv/genre/${genreId}?page=${pageParam}`).then((res) =>
        res.json(),
      ),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
    enabled: !!genreId && Number(genreId) > 0,
  });

  if (!genreId || Number(genreId) <= 0) {
    return <div>No TV series found</div>;
  }

  const flattenedData =
    results.data?.pages.flatMap((page) => page.results) || [];

  return (
    <div {...props} id="genres-result-container" className={cn(`${className}`)}>
      <InfiniteScrollContainer
        className="grid w-full grid-cols-2 gap-4 p-2 md:grid-cols-3 md:p-4 lg:grid-cols-4 xl:grid-cols-6"
        {...results}
        parentId="genres-result-container"
      >
        {flattenedData.map((item) => (
          <MediaSliderItem
            className="h-full"
            imageType="poster"
            key={item.title + item.id}
            {...item}
          />
        ))}
      </InfiniteScrollContainer>
    </div>
  );
};

export default TVGenreResults;
