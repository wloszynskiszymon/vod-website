import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_KEY } from '../../hooks/useMedia';
import axios from 'axios';

const MovieTile = (props) => {
  const navigate = useNavigate();

  const { id, title, name, date, backdrop_path, media_type } = props;

  const [backdrop, setBackdrop] = useState(null);
  const onClickHandler = () => navigate(`/${media_type}/${id}`);

  useEffect(() => {
    const fetchRandomMoviesWithLogos = async () => {
      try {
        const imagesUrl = `https://api.themoviedb.org/3/${media_type}/${id}/images?api_key=${API_KEY}`;

        const imagesResponse = await axios.get(imagesUrl);
        const imagesData = imagesResponse.data;
        let backdrops = imagesData.backdrops.find(
          (backdrop) => backdrop.iso_639_1 === 'en' || null
        );
        if (!backdrops) {
          backdrops = imagesData.backdrops[0];
        }

        const backdropPath = backdrops.file_path
          ? backdrops.file_path
          : backdrop_path;
        const backdropURL = `https://image.tmdb.org/t/p/w500${backdropPath}`;

        setBackdrop(backdropURL);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchRandomMoviesWithLogos();
  }, [id, media_type, backdrop_path]);

  function checkIsNew(dateString) {
    const date = new Date(dateString);
    const diffInMillis = Date.now() - date.getTime();
    const months = diffInMillis / (1000 * 60 * 60 * 24 * 30);
    return months <= 3;
  }

  const isNew = checkIsNew(date);
  // w-[12rem] lg:w-[14rem] 2xl:w-[16rem] min-h-[5rem]

  return (
    <div className='group flex justify-center items-center relative border-2 border-gray-600 drop-shadow-2xl cursor-pointer rounded-xl overflow-hidden hover:border-white transition-all duration-200 hover:scale-105  '>
      <div
        onClick={onClickHandler}
        // href={URL_INFO_LINK + id}
        target='_blank'
        rel='noreferrer'
        className='block w-full'
      >
        <div className='absolute top-0 left-0 w-full h-full flex-center bg-gray-900 bg-opacity-20 transition-opacity duration-200 group-hover:bg-black group-hover:bg-opacity-80 '>
          <p className='text-white tracking-tighter text-sm lg:text-lg font-bold text-center p-1 opacity-0 group-hover:opacity-100 duration-200 '>
            {title ? title : name}
          </p>
        </div>
        {isNew && (
          <div className='absolute opacity-1 -top-3 -right-3 lg:-top-4 lg:-right-4 translate-x-1/3 translate-y-3/4 w-full h-1/4 bg-purple-800 rotate-45 flex-center group-hover:opacity-0'>
            <p className='text-white trakcing-wider text-[13px] sm:text-sm text-center'>
              NEW
            </p>
          </div>
        )}

        <img
          src={backdrop}
          className='object-contain w-full'
          alt={`${title} poster`}
        />
      </div>
    </div>
  );
};

export default MovieTile;
