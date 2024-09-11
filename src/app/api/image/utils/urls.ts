import {
  fetchDiscoverMovies,
  fetchDiscoverTVShows,
  fetchMoviesNowPlaying,
  fetchPopularMovies,
  fetchPopularTVShows,
  fetchTopRatedMovies,
  fetchTopRatedTVShows,
  fetchTVShowsOnTheAir,
} from "@/services/tmdb/slider";

export type SliderLink = {
  fn: () => Promise<any>;
  title: string;
};

export const sliderMoviesLinks: SliderLink[] = [
  {
    fn: fetchDiscoverMovies,
    title: "Discover the best movies!",
  },
  {
    fn: fetchMoviesNowPlaying,
    title: "Now playing in theaters!",
  },
  {
    fn: fetchPopularMovies,
    title: "The most popular movies!",
  },
  {
    fn: fetchTopRatedMovies,
    title: "Top rated movies!",
  },
];

export const sliderTVsLink: SliderLink[] = [
  {
    fn: fetchDiscoverTVShows,
    title: "Discover new TV shows!",
  },
  {
    fn: fetchTVShowsOnTheAir,
    title: "Upcoming TV shows!",
  },
  {
    fn: fetchPopularTVShows,
    title: "The most popular TV shows!",
  },
  {
    fn: fetchTopRatedTVShows,
    title: "Top rated TV shows!",
  },
];
