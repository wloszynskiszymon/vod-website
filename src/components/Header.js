import { API_KEY } from '../utilities/constants';
import React, { useEffect, useState } from 'react';
import InputSearch from './UI/InputSearch';

import { useDispatch, useSelector } from 'react-redux';
import { fetchMedia } from '../store/media-slice';

const API_URL_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_media_type=movie&region=pl`;

const Header = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);

  const { status: headerStatus, data: headerData } = useSelector(
    (state) => state.mediaSlice.header
  );

  useEffect(() => {
    if (headerStatus === 'idle') {
      dispatch(fetchMedia({ link: API_URL_MOVIES, dataLocation: 'header' }));
    }
  }, [dispatch, headerData, headerStatus]);

  useEffect(() => {
    if (headerStatus === 'succeeded') {
      const index = Math.floor(Math.random() * headerData.length);
      const imagePath = headerData[index]
        ? `https://image.tmdb.org/t/p/original/${headerData[index].backdrop_path}`
        : null;
      setImage(imagePath);
    }
  }, [headerData, headerStatus]);

  return (
    <header id='start' className='relative bg-gray-900 flex-center w-full'>
      {image && (
        <img
          src={image}
          alt='Header background'
          className='w-full lg:w-5/6 h-full absolute transfrom top-0 left-1/2 -translate-x-1/2 bg-center object-cover'
        />
      )}
      <div
        className={`flex-center flex-col w-full lg:w-11/12 h-full z-10 relative bg-gradient-to-r from-[rgba(17,24,39,0.6)] from-10% via-[rgba(17,24,39,0.6)] via-50% to-90% md:from-gray-900 md:via-[rgba(17,24,39,0.6)] md:to-gray-900 to-[rgba(17,24,39,0.6)]`}
      >
        <article className='flex flex-col justify-end items-center w-full mt-36 lg:mt-60'>
          <h1 className='text-4xl lg:text-6xl font-extrabold text-gray-300 mb-4 tracking-wider'>
            Discover Filmi
            <span className='text-purple-500 font-bold'>X</span>
          </h1>
          <p className='text-xl md:text-2xl lg:text-3xl text-gray-300 tracking-tighter'>
            The best <span className='text-purple-500 font-bold'>movies </span>
            and
            <span className='text-purple-500 font-bold'> TV shows!</span>
          </p>
        </article>
        <div className='flex justify-between items-center flex-col w-full relative h-[14rem] lg:h-[20rem] pb-3 pt-6 lg:pt-1'>
          <InputSearch />
        </div>
      </div>
    </header>
  );
};

export default Header;
