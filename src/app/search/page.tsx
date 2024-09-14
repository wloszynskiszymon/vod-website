"use client";
import MediaSliderItem from "@/features/SliderItem/MediaSliderItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";
import SearchInput from "./_components/SearchInput";

const SearchPage = () => {
  const params = useSearchParams();
  const query = params?.get("q");

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [`search-${query}`],
    queryFn: ({ pageParam = 1 }) =>
      fetch(`/api/search/${query}?page=${pageParam}`).then((res) => res.json()),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
    enabled: !!query,
  });

  const observer = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading || isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, isFetchingNextPage, hasNextPage, fetchNextPage],
  );

  return (
    <div className="h-screen w-screen">
      <SearchInput />
      <div className="h-full w-full translate-y-28 overflow-y-auto">
        <div className="lg-grid-cols-4 grid h-fit w-full grid-cols-2 gap-4 p-6 md:grid-cols-3 xl:grid-cols-6">
          {isLoading && (
            <p className="text-1xl col-span-full text-center text-gray-300">
              Loading...
            </p>
          )}
          {isError && (
            <p className="text-1xl col-span-full text-center text-red-500">
              Error loading results.
            </p>
          )}
          {data?.pages.map((page, pageIndex) => (
            <>
              {page?.results.map((item: any, index: number) => {
                if (
                  pageIndex === data.pages.length - 1 &&
                  index === page.results.length - 1
                ) {
                  return (
                    <div ref={lastItemRef} key={item.id}>
                      <MediaSliderItem {...item} />
                    </div>
                  );
                }
                return <MediaSliderItem key={item.id} {...item} />;
              })}
            </>
          ))}
        </div>

        {isFetchingNextPage && (
          <p className="text-1xl col-span-full text-center text-gray-300">
            Loading more...
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
