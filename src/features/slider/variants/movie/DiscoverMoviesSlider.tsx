import { fetchPopularMovies } from "@/services/tmdb/slider";
import { tmdb } from "@/services/tmdb/tmdb";
import { formatMoviesForSlider } from "@/services/tmdb/utils/format";
import MediaSlider from "../../sliders/MediaSlider";

const DiscoverMovieSlider = async () => {
  const { results } = await fetchPopularMovies();
  const formattedMovies = formatMoviesForSlider(results);
  const images = await tmdb.movies.images(formattedMovies[0].id, {
    language: "en-US",
  });

  console.log(images);

  return (
    <MediaSlider
      shows={formattedMovies}
      mediaType="movie"
      title="Discover the best movies!"
    />
  );
};

export default DiscoverMovieSlider;
