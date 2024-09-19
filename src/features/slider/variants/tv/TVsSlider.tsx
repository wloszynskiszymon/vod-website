import { SliderLink } from "@/app/(api)/api/image/utils/urls";
import { tmdb } from "@/services/tmdb/tmdb";
import { formatTVsForSlider } from "@/services/tmdb/utils/format";
import { TV } from "tmdb-ts";
import MediaSlider from "../../MediaSlider";

const TVsSlider = async ({ fn, title }: SliderLink) => {
  const { results } = await fn();
  const formattedTVs = formatTVsForSlider(results as TV[], "poster");
  const images = await tmdb.tvShows.images(formattedTVs[0].id, {
    language: "en-US",
  });

  console.log(images);

  return <MediaSlider shows={formattedTVs} mediaType="tv" title={title} />;
};

export default TVsSlider;
