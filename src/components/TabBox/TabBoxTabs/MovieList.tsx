"use client";
import MediaSliderItem from "@/features/SliderItem/MediaSliderItem";
import { SliderShow } from "@/types/types";

const MovieList = (movies: SliderShow[]) => {
  return movies.map((movie) => (
    <MediaSliderItem imageType="poster" mediaType="movie" {...movie} />
  ));
};

export default MovieList;
