import { fetchDiscoverTVShows } from "@/services/tmdb/slider";
import { tmdb } from "@/services/tmdb/tmdb";
import { formatTVsForSlider } from "@/services/tmdb/utils/format";
import MediaSlider from "../../sliders/MediaSlider";

const DiscoverTVShowsSlider = async () => {
  const { results } = await fetchDiscoverTVShows();
  const formattedTVs = formatTVsForSlider(results);
  const images = await tmdb.tvShows.images(formattedTVs[0].id, {
    language: "en-US",
  });

  console.log(images);

  return (
    <MediaSlider
      shows={formattedTVs}
      mediaType="tv"
      title="Discover new TV shows!"
    />
  );
};

export default DiscoverTVShowsSlider;
