import { SliderShow } from "@/types/types";
import { Movie, TV } from "tmdb-ts";

export const formatMoviesForSlider = (movies: Movie[]): SliderShow[] => {
  // Eliminate movies without a backdrop image
  const withBackdrop = movies.filter((movie) => movie.backdrop_path);

  return withBackdrop.map((movie) => ({
    id: movie.id,
    title: movie.title,
    releaseDate: movie.release_date,
    image: movie.backdrop_path,
  })) satisfies SliderShow[];
};

export const formatTVsForSlider = (tvs: TV[]): SliderShow[] => {
  // Eliminate movies without a backdrop image
  const withBackdrop = tvs.filter((tv) => tv.backdrop_path);

  return withBackdrop.map((tv) => ({
    id: tv.id,
    title: tv.name,
    releaseDate: tv.first_air_date,
    image: tv.backdrop_path,
  })) satisfies SliderShow[];
};
