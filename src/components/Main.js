import MovieTilesRow from './UI/MovieTilesRow';

import { useState, useEffect, useCallback } from 'react';
import {useSearch, API_KEY} from '../hooks/useSearch';
import axios from 'axios';

const API_URL_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&region=PL&with_images=true&language=pl&with_backdrop=true`;
const API_URL_SERIES = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=vote_average.desc&region=PL&with_images=true&language=pl&with_backdrop=true&vote_count.gte=10
`;

const Main = () => {
  // const [dataa, loading, error] = useSearch(API_URL_MOVIES, 5);
  const [searchError, setSearchError] = useState(false);
  const [data, setData] = useState({ movies: [], series: [] });

  const getMoviesAndSeries = useCallback(async (url) => {
    try {
      const res = await axios.get(url);
      const filteredData = res.data.results.filter(
        (result) => !result.backdropPath && result.backdrop_path
      );
      const movies = filteredData.slice(0, 5);
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
    <main className='pt-12 pb-24 bg-gradient-to-r from-neutral-900  via-[rgb(31,41,55)] to-neutral-900'>
      <section id='movies'>
        <h2 className='text-gray-300 font-extrabold self-start text-md md:text-2xl uppercase mt-2 mb-2 px-7 md:px-20 lg:px-35 tracking-wider'>
          Najpopularniejsze filmy
        </h2>
        <MovieTilesRow isMovie={true} data={data.movies} />
      </section>
      <section id='series'>
        <h2 className='text-gray-300 font-extrabold self-start text-md md:text-2xl uppercase mt-2 mb-2 px-4 md:px-20 lg:px-35 tracking-wider'>
          Najlepsze seriale
        </h2>
        <MovieTilesRow isMovie={false} data={data.series} />
      </section>
    </main>
  );
};

export default Main;
