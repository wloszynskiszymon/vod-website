import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FixMeLater } from "../types/types";
import { fetchBetterImages } from "../utilities/UtilitiesFunctions";

const fetchMedia = async (url: FixMeLater, mediaType: FixMeLater) => {
  if (url.length === 0) return { data: [] };

  const res = await axios.get(url);

  const readyData = await fetchBetterImages(res.data.results, mediaType);

  return readyData;
};

const useMediaImages = (data: FixMeLater) => {
  const imageData = useQuery({
    queryKey: [`image-${data}`],
    queryFn: async () => {
      const results = await axios.all(
        data.map(({ link, media_type }: FixMeLater) =>
          fetchMedia(link, media_type),
        ),
      );
      const titles = data.map(({ title }: FixMeLater) => title);

      const combinedData = results.map((dataItem, index) => ({
        data: dataItem,
        title: titles[index],
      }));

      return combinedData;
    },
    staleTime: Infinity,
  });

  return imageData;
};

export default useMediaImages;
