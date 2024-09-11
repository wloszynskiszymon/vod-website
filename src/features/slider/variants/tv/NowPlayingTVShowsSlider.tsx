import { fetchTVShowsOnTheAir } from "@/services/tmdb/slider";
import { tmdb } from "@/services/tmdb/tmdb";
import { formatTVsForSlider } from "@/services/tmdb/utils/format";
import { TV } from "tmdb-ts";
import MediaSlider from "../../sliders/MediaSlider";

const NowPlayingTVShowsSlider = async () => {
  const { results } = await fetchTVShowsOnTheAir();
  const formattedTVs = formatTVsForSlider(results as TV[]);
  const images = await tmdb.tvShows.images(formattedTVs[0].id, {
    language: "en-US",
  });

  console.log(images);

  return (
    <MediaSlider
      shows={formattedTVs}
      mediaType="tv"
      title="Upcoming TV shows!"
    />
  );
};

export default NowPlayingTVShowsSlider;
