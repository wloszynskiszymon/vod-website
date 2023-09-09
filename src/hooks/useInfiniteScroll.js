import { useEffect, useMemo, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import useURL from './useURL';
import { fetchBetterImages } from '../utilities/UtilitiesFunctions';

const fetchSearchDataAndImages = async ({
  url,
  page = 1,
  mediaType = null,
}) => {
  // console.log(`${url}&page=${page}`);
  const res = await axios.get(`${url}&page=${page}`);

  if (mediaType) {
    const data = res.data.results.map((singleData) => {
      return { mediaType, ...singleData };
    });
    // console.log(data);
    const readyData = await fetchBetterImages(data, mediaType);
    return readyData;
  } else {
    // console.log(res.data.results);
    const readyData = await fetchBetterImages(res.data.results);
    return readyData;
  }
};

const useInfiniteScroll = (
  baseURL,
  options = {},
  mediaType = null,
  enabled = true
) => {
  const [initial, setInitial] = useState(true);
  const [q, setQ] = useState(options.query);
  const builtURL = useURL(baseURL, { ...options });

  const { data: searchData, ...otherProps } = useInfiniteQuery({
    queryKey: [`infinite-scroll-${baseURL}${q ? `-${q}` : ''}`],
    queryFn: ({ pageParam = 1 }) => {
      return fetchSearchDataAndImages({
        url: builtURL,
        page: pageParam,
        mediaType,
      });
    },
    staleTime: Infinity,
    getNextPageParam: (lastPage, allPage) => {
      return allPage.length + 1;
    },
    enabled: enabled,
    onSuccess: () => {
      if (otherProps.isSuccess && initial) {
        otherProps.fetchNextPage();
        setInitial(false);
      }

      if (q !== options.query) {
        setQ(options.query);
        setInitial(true);
      }
    },
  });

  const allSearchData = useMemo(
    () => searchData?.pages.flatMap((page) => page),
    [searchData]
  );

  useEffect(() => {
    if (otherProps.isSuccess && initial) {
      otherProps.fetchNextPage();
      setInitial(false);
    }
  }, [initial, otherProps.isSuccess, otherProps]);

  useEffect(() => {
    if (q !== options.query) {
      setQ(options.query);
      setInitial(true);
    }
  }, [q, options.query]);

  const resetDataAndHook = () => {
    otherProps.remove();
    setInitial(true);
  };

  // Has fetched 2 first pages.
  const isFinalSuccess = otherProps.isSuccess && initial === false;

  return {
    data: allSearchData,
    ...otherProps,
    resetDataAndHook,
    isFinalSuccess,
  };
};

export default useInfiniteScroll;
