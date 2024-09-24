import { useInfiniteQuery } from "@tanstack/react-query";

const useSimilarTabInfiniteQuery = (
  mediaType: "movie" | "tv",
  showId: number,
) => {
  return useInfiniteQuery({
    queryKey: [`similar-${mediaType}-${showId}`],
    queryFn: ({ pageParam = 1 }) =>
      fetch(`/api/${mediaType}/similar/${showId}?page=${pageParam}`).then(
        (res) => res.json(),
      ),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
    enabled: !!showId,
  });
};

export default useSimilarTabInfiniteQuery;
