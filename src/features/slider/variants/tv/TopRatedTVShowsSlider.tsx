import { fetchTopRatedTVShows } from "@/services/tmdb/slider";
import { tmdb } from "@/services/tmdb/tmdb";
import { formatTVsForSlider } from "@/services/tmdb/utils/format";
import { TV } from "tmdb-ts";
import MediaSlider from "../../sliders/MediaSlider";

const TopRatedTVShowsSlider = async () => {
  const { results } = await fetchTopRatedTVShows();
  const formattedTVs = formatTVsForSlider(results as TV[]);
  const images = await tmdb.tvShows.images(formattedTVs[0].id, {
    language: "en-US",
  });

  console.log(images);

  return (
    <MediaSlider
      shows={formattedTVs}
      mediaType="tv"
      title="Top rated TV shows!"
    />
  );
};

export default TopRatedTVShowsSlider;
