"use client";
import { useRef } from "react";

import { FixMeLater } from "@/types/types";
import SearchInput from "./_components/SearchInput";

const SearchPage = () => {
  const scrollContainerRef = useRef<FixMeLater>(null);

  // const {
  //   data,
  //   isLoading,
  //   isError,
  //   isSuccess,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetchingNextPage,
  // } = useInfiniteScroll('search/multi', {
  //   query: inputValue,
  // });

  // const noResultsCondition = isError || (isSuccess && data.length === 0);

  return (
    <div className="h-screen w-screen">
      <SearchInput />

      <div
        className="h-full w-full translate-y-28 overflow-y-auto"
        ref={scrollContainerRef}
        onScroll={
          () => {}
          // handleInfiniteScroll(
          //   scrollContainerRef,
          //   isFetchingNextPage,
          //   hasNextPage,
          //   fetchNextPage
          // )
        }
      >
        <div className="lg-grid-cols-4 grid h-fit w-full grid-cols-2 gap-4 p-6 md:grid-cols-3 xl:grid-cols-6">
          {/* {isSuccess && renderMovieTiles(data)}
          {noResultsCondition && (
            <p className='text-gray-300 text-1xl text-center col-span-full'>
              No results found.
            </p>
          )}
          {isLoading && (
            <div className='col-span-full justify-self-center'>
              <PulseLoader color={'Silver'} size={16} />
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
