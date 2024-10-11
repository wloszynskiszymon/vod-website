import { useInfiniteQuery } from "@tanstack/react-query";

const useInfiniteScroll = (query: string) => {
  return useInfiniteQuery({
    queryKey: [`search-${query}`],
    queryFn: ({ pageParam = 1 }) =>
      fetch(`/api/multi/search/${query}?page=${pageParam}`).then((res) =>
        res.json(),
      ),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
    enabled: !!query && query.length > 0,
  });
};

export default useInfiniteScroll;
