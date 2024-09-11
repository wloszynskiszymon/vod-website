import { fetchDiscoverMovies } from "@/services/tmdb/slider";
import { tmdb } from "@/services/tmdb/tmdb";
import { formatMoviesForSlider } from "@/services/tmdb/utils/format";
import MediaSlider from "../../sliders/MediaSlider";

const NowPlayingMoviesSlider = async () => {
  const { results } = await fetchDiscoverMovies();
  const formattedMovies = formatMoviesForSlider(results);
  const images = await tmdb.movies.images(formattedMovies[0].id, {
    language: "en-US",
  });

  console.log(images);

  return (
    <MediaSlider
      shows={formattedMovies}
      mediaType="movie"
      title="Now playing in theaters!"
    />
  );
};

export default NowPlayingMoviesSlider;
