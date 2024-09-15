import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

type InfiniteScrollContainerProps = UseInfiniteQueryResult<
  InfiniteData<any, unknown>,
  Error
> &
  React.PropsWithChildren & {
    className?: string;
    parentId: string;
  };

const InfiniteScrollContainer: React.FC<InfiniteScrollContainerProps> = ({
  data,
  fetchNextPage,
  hasNextPage,
  children,
  className = "",
  parentId,
}) => {
  const flattenedData = data?.pages.flatMap((page) => page.results) || [];

  return (
    <InfiniteScroll
      next={fetchNextPage}
      dataLength={flattenedData.length}
      hasMore={hasNextPage}
      scrollableTarget={parentId}
      loader={null}
    >
      <div className={`${className} `}>{children}</div>
    </InfiniteScroll>
  );
};

export default InfiniteScrollContainer;
