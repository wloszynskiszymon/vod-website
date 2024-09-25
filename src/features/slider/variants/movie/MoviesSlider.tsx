import { SliderLink } from "@/app/(api)/api/image/utils/urls";
import { tmdb } from "@/services/tmdb/tmdb";
import { formatMoviesForSlider } from "@/services/tmdb/utils/format";
import { Movie } from "tmdb-ts";
import MediaSlider from "../../MediaSlider";

const NowPlayingMoviesSlider = async ({ fn, title }: SliderLink) => {
  const { results } = await fn();
  const formattedMovies = formatMoviesForSlider(results as Movie[], "poster");

  return (
    <MediaSlider shows={formattedMovies} mediaType="movie" title={title} />
  );
};

export default NowPlayingMoviesSlider;
