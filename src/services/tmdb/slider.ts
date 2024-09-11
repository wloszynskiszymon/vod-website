// Example: Movie and TV-specific API functions with types
import {
  MovieDiscoverResult,
  MoviesPlayingNow,
  OnTheAir,
  PopularMovies,
  PopularTvShows,
  TopRatedMovies,
  TopRatedTvShows,
  TvShowDiscoverResult,
} from "tmdb-ts";
import { tmdb } from "./tmdb";

function getRandInt(): number {
  return Math.floor(Math.random() * 5) + 1;
}

export const fetchDiscoverMovies = (): Promise<MovieDiscoverResult> =>
  tmdb.discover.movie({
    sort_by: "popularity.desc",
    region: "US",
    language: "en-US",
    page: getRandInt(),
  });

export const fetchMoviesNowPlaying = (): Promise<MoviesPlayingNow> =>
  tmdb.movies.nowPlaying({
    region: "US",
    language: "en-US",
    page: getRandInt(),
  });

export const fetchPopularMovies = (): Promise<PopularMovies> =>
  tmdb.movies.popular({
    language: "en-US",
    page: getRandInt(),
  });

export const fetchTopRatedMovies = (): Promise<TopRatedMovies> =>
  tmdb.movies.topRated({
    region: "US",
    language: "en-US",
    page: getRandInt(),
  });

export const fetchDiscoverTVShows = (): Promise<TvShowDiscoverResult> =>
  tmdb.discover.tvShow({
    sort_by: "popularity.desc",
    language: "en-US",
    page: getRandInt(),
  });

export const fetchTVShowsOnTheAir = (): Promise<OnTheAir> =>
  tmdb.tvShows.onTheAir({
    language: "en-US",
    page: getRandInt(),
  });

export const fetchPopularTVShows = (): Promise<PopularTvShows> =>
  tmdb.tvShows.popular({
    language: "en-US",
    page: getRandInt(),
  });

export const fetchTopRatedTVShows = (): Promise<TopRatedTvShows> =>
  tmdb.tvShows.topRated({
    language: "en-US",
    page: getRandInt(),
  });
