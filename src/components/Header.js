import { useState, useEffect } from 'react';
import { API_KEY, useMedia } from '../hooks/useMedia';
import InputSearch from './UI/InputSearch';

import MovieTilesRow from './MovieTiles/MovieTilesRow';

const API_URL_HEADER = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_media_type=movie&region=pl`;

const Header = () => {
  const [image, setImage] = useState(null);
  const { data } = useMedia(API_URL_HEADER, 10);

  const [searchResults, setSearchResults] = useState(null);
  const [, setSearchError] = useState(false);

  useEffect(() => {
    if (data) {
      const index = Math.floor(Math.random() * data.length);
      setImage(
        `https://image.tmdb.org/t/p/original/${data[index].backdrop_path}`
      );
    }
  }, [data]);

  return (
    <header id='start' className='relative bg-gray-900 flex-center w-full'>
      <img
        src={image && image}
        alt='Header background'
        className='w-full lg:w-5/6 h-full absolute transfrom top-0 left-1/2 -translate-x-1/2 bg-center object-cover'
      />
      <div
        className={`flex-center flex-col w-full lg:w-11/12 h-full z-10 relative bg-gradient-to-r from-[rgba(17,24,39,0.6)] from-10% via-[rgba(17,24,39,0.6)] via-50% to-90% md:from-gray-900 md:via-[rgba(17,24,39,0.6)] md:to-gray-900 to-[rgba(17,24,39,0.6)]`}
      >
        d
        <article className='flex flex-col justify-end items-center w-full mt-36 lg:mt-60'>
          <h1 className='text-4xl lg:text-6xl font-extrabold text-gray-300 mb-4 tracking-wider'>
            Odkryj Filmi
            <span className='text-purple-500 font-bold'>X</span>
          </h1>
          <p className='text-xl md:text-2xl lg:text-3xl text-gray-300 tracking-tighter'>
            Najlepsze <span className='text-purple-500 font-bold'>filmy </span>i
            <span className='text-purple-500 font-bold'> seriale!</span>
          </p>
        </article>
        <div className='flex justify-between items-center flex-col w-full relative h-[14rem] lg:h-[20rem] pb-3'>
          <InputSearch
            setSearchResults={setSearchResults}
            setSearchError={setSearchError}
          />
          {searchResults && (
            <MovieTilesRow className={'items-center'} data={searchResults} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
