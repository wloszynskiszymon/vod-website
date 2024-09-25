"use client";
import InfiniteScrollContainer from "@/app/(pages)/search/_components/InfiniteScrollContainer";
import useSimilarTabInfiniteQuery from "./hooks/useSimilarTabInfiniteQuery";
import MediaSliderItem from "@/features/SliderItem/MediaSliderItem";

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
      className="grid h-fit w-full grid-cols-5 gap-4 p-1"
      parentId={parentId}
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
  );
};

export default TabSimilar;
