import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { fetchBetterImages } from '../utilities/UtilitiesFunctions';

const fetchMedia = async (url, mediaType) => {
  if (url.length === 0) return { data: [] };

  const res = await axios.get(url);

  const readyData = await fetchBetterImages(res.data.results, mediaType);

  return readyData;
};

const useMediaImages = (data) => {
  const imageData = useQuery({
    queryKey: [`image-${data}`],
    queryFn: async () => {
      const results = await axios.all(
        data.map(({ link, media_type }) => fetchMedia(link, media_type))
      );
      const titles = data.map(({ title }) => title);

      const combinedData = results.map((dataItem, index) => ({
        data: dataItem,
        title: titles[index],
      }));

      return combinedData;
    },
    staleTime: Infinity,
    keepPreviousData: true,
  });

  return imageData;
};

export default useMediaImages;
