import { useState, useEffect } from 'react';

import MovieTilesRow from './MovieTiles/MovieTilesRow';
import ErrorIcon from './UI/ErrorIcon';
import { PulseLoader } from 'react-spinners';
import { ErrorBoundary } from 'react-error-boundary';

import { API_KEY, useMedia } from '../hooks/useMedia';

const API_URL_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&region=PL&with_images=true&language=pl&with_backdrop=true`;
const API_URL_SERIES = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=vote_average.desc&region=PL&with_images=true&language=pl&with_backdrop=true&vote_count.gte=10
`;

const Main = () => {
  const [dataReady, setDataReady] = useState(false);
  const {
    data: moviesData,
    loading: moviesLoading,
    error: moviesError,
  } = useMedia(API_URL_MOVIES);
  const {
    data: seriesData,
    loading: seriesLoading,
    error: seriesError,
  } = useMedia(API_URL_SERIES);

  useEffect(() => {
    if (moviesData && seriesData) {
      setDataReady(true);
    }
  }, [moviesData, seriesData]);

  const renderSpinnerCondition = moviesLoading || seriesLoading;
  const renderErrorCondition = moviesError || seriesError;

  return (
    <main className='pt-12 pb-24 bg-gradient-to-r from-neutral-900  via-[rgb(31,41,55)] to-neutral-900'>
      {renderSpinnerCondition ? (
        <div className='my-10 flex-center'>
          <PulseLoader color={'Silver'} size={20} />
        </div>
      ) : renderErrorCondition ? (
        <ErrorBoundary>
          <div className='text-gray-300 text-center font-extrabold text-xl flex-center'>
            <ErrorIcon />
            <p className='ml-2'>Something went Wrong...</p>
          </div>
        </ErrorBoundary>
      ) : (
        <>
          <section id='movies' className='px-4 md:px-8 xl:px-12'>
            <h2 className='text-gray-300 font-extrabold self-start text-md md:text-2xl uppercase my-2 px-4 md:px-6 tracking-wider'>
              Najpopularniejsze filmy
            </h2>
            {dataReady && <MovieTilesRow isMovie={true} data={moviesData} />}
          </section>
          <section id='series' className='px-4 md:px-8 xl:px-12 mt-6'>
            <h2 className='w-full text-gray-300 font-extrabold self-start text-md md:text-2xl uppercase my-2 px-4 md:px-6 tracking-wider'>
              Najlepsze seriale
            </h2>
            {dataReady && <MovieTilesRow isMovie={false} data={seriesData} />}
          </section>
        </>
      )}
    </main>
  );
};

export default Main;
