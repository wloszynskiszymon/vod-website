import MovieTilesRow from './UI/MovieTilesRow';

import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_URL_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&region=PL&with_original_title&with_images=true&with_media_type=movie`;
const API_URL_SERIES = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&region=PL&with_original_title&with_images=true&with_media_type=tv`;

const Main = () => {
  const [data, setData] = useState({ movies: [], series: [] });

  const getMoviesAndSeries = useCallback(async (url) => {
    try {
      const res = await axios.get(url);
      const movies = res.data.results.slice(0, 5);
      return movies;
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    const movieRes = getMoviesAndSeries(API_URL_MOVIES);
    const seriesRes = getMoviesAndSeries(API_URL_SERIES);

    Promise.all([movieRes, seriesRes]).then(([movies, series]) => {
      setData({ movies, series });
    });
  }, [getMoviesAndSeries]);

  return (
    <main className='bg-gray-800 pt-10 pb-32'>
      <MovieTilesRow isMovie={true} data={data.movies} />
      <MovieTilesRow isMovie={true} data={data.movies} />
      <MovieTilesRow isMovie={false} data={data.series} />
    </main>
  );
};

export default Main;
