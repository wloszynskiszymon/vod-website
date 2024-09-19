import { SliderShow } from "@/types/types";
import { Movie, TV } from "tmdb-ts";

export const formatMoviesForSlider = (
  movies: Movie[],
  imageType: "poster" | "backdrop",
): SliderShow[] => {
  switch (imageType) {
    case "backdrop":
      // Eliminate movies without a backdrop image
      const withBackdrop = movies.filter((movie) => movie.backdrop_path);

      return withBackdrop.map((movie) => ({
        id: movie.id,
        title: movie.title,
        releaseDate: movie.release_date,
        image: movie.backdrop_path,
      })) satisfies SliderShow[];

    case "poster":
      // Eliminate movies without a backdrop image
      const withPoster = movies.filter((movie) => movie.poster_path);

      return withPoster.map((movie) => ({
        id: movie.id,
        title: movie.title,
        releaseDate: movie.release_date,
        image: movie.poster_path,
      })) satisfies SliderShow[];
  }
};

export const formatTVsForSlider = (
  tvs: TV[],
  imageType: "poster" | "backdrop",
): SliderShow[] => {
  switch (imageType) {
    case "backdrop":
      // Eliminate movies without a backdrop image
      const withBackdrop = tvs.filter((tv) => tv.backdrop_path);

      return withBackdrop.map((tv) => ({
        id: tv.id,
        title: tv.name,
        releaseDate: tv.first_air_date,
        image: tv.backdrop_path,
      })) satisfies SliderShow[];

    case "poster":
      // Eliminate movies without a backdrop image
      const withPoster = tvs.filter((tv) => tv.poster_path);

      return withPoster.map((tv) => ({
        id: tv.id,
        title: tv.name,
        releaseDate: tv.first_air_date,
        image: tv.poster_path,
      })) satisfies SliderShow[];
  }
};
