import { useInfiniteQuery } from "@tanstack/react-query";

const useSimilarTabInfiniteQuery = (movieId: number) => {
  return useInfiniteQuery({
    queryKey: [`similar-movie-${movieId}`],
    queryFn: ({ pageParam = 1 }) =>
      fetch(`/api/movie/similar/${movieId}?page=${pageParam}`).then((res) =>
        res.json(),
      ),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
    enabled: !!movieId,
  });
};

export default useSimilarTabInfiniteQuery;
