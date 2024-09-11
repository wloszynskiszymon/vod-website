import {
  fetchDiscoverMovies,
  fetchDiscoverTVShows,
  fetchMoviesNowPlaying,
  fetchPopularMovies,
  fetchPopularTVShows,
  fetchTopRatedMovies,
  fetchTopRatedTVShows,
  fetchTVShowsOnTheAir,
} from "@/services/api/slider";

export type SliderLink<T> = {
  promise: Promise<T>;
  title: string;
  media_type: "movie" | "tv";
};

export const sliderLinks: SliderLink<any>[] = [
  {
    promise: fetchDiscoverMovies(),
    title: "Discover the best movies!",
    media_type: "movie",
  },
  {
    promise: fetchMoviesNowPlaying(),
    title: "Now playing in theaters!",
    media_type: "movie",
  },
  {
    promise: fetchPopularMovies(),
    title: "The most popular movies!",
    media_type: "movie",
  },
  {
    promise: fetchTopRatedMovies(),
    title: "Top rated movies!",
    media_type: "movie",
  },
  {
    promise: fetchDiscoverTVShows(),
    title: "Discover new TV shows!",
    media_type: "tv",
  },
  {
    promise: fetchTVShowsOnTheAir(),
    title: "Upcoming TV shows!",
    media_type: "tv",
  },
  {
    promise: fetchPopularTVShows(),
    title: "The most popular TV shows!",
    media_type: "tv",
  },
  {
    promise: fetchTopRatedTVShows(),
    title: "Top rated TV shows!",
    media_type: "tv",
  },
];
