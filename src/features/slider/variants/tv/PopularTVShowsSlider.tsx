import { fetchPopularTVShows } from "@/services/tmdb/slider";
import { tmdb } from "@/services/tmdb/tmdb";
import { formatTVsForSlider } from "@/services/tmdb/utils/format";
import { TV } from "tmdb-ts";
import MediaSlider from "../../sliders/MediaSlider";

const PopularTVShowsSlider = async () => {
  const { results } = await fetchPopularTVShows();
  const formattedTVs = formatTVsForSlider(results as TV[]);
  const images = await tmdb.tvShows.images(formattedTVs[0].id, {
    language: "en-US",
  });

  console.log(images);

  return (
    <MediaSlider
      shows={formattedTVs}
      mediaType="tv"
      title="The most popular TV shows!"
    />
  );
};

export default PopularTVShowsSlider;
