"use client";
import InfiniteScrollContainer from "@/app/(pages)/search/_components/InfiniteScrollContainer";
import Poster from "@/features/Poster/Poster";
import useSimilarTabInfiniteQuery from "../../features/TabBox/hooks/useSimilarTabInfiniteQuery";

type TabSimilarProps = React.HTMLProps<HTMLDivElement> & {
  showId: number;
  parentId: string;
  mediaType: "movie" | "tv";
};
const TabSimilar = ({ mediaType, showId, parentId }: TabSimilarProps) => {
  const infiniteScrollResults = useSimilarTabInfiniteQuery(mediaType, showId);

  const items =
    infiniteScrollResults.data?.pages.flatMap((page) => page.results) || [];

  return (
    <InfiniteScrollContainer
      className="grid h-fit w-full grid-cols-1 gap-4 p-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      parentId={parentId}
      {...infiniteScrollResults}
    >
      {items.map((item) => (
        <Poster imageType="poster" key={item.title + item.id} {...item} />
      ))}
    </InfiniteScrollContainer>
  );
};

export default TabSimilar;
