import { SliderLink } from "@/app/api/multi/image/utils/urls";
import { formatTVsForSlider } from "@/services/tmdb/utils/format";
import { TV } from "tmdb-ts";
import MediaSlider from "../../MediaSlider";

const TVsSlider = async ({ fn, title }: SliderLink) => {
  const { results } = await fn();
  const formattedTVs = formatTVsForSlider(results as TV[], "poster");

  return <MediaSlider shows={formattedTVs} mediaType="tv" title={title} />;
};

export default TVsSlider;
