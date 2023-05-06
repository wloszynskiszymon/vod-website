import { useState } from 'react';

const MovieTile = (props) => {
  const [hovered, setHovered] = useState(false);
  const handleHover = () => setHovered(true);
  const handleLeave = () => setHovered(false);

  const URL = `https://www.themoviedb.org/${props.isMovie ? 'movie' : 'tv'}/`;

  return (
    <div
      className='w-[17rem] min-h-[5rem] flex justify-center items-center relative border-2 border-gray-600 drop-shadow-2xl overflow-hidden hover:border-white transition-all hover:scale-105 cursor-pointer rounded-xl'
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <a
        href={URL + props.id}
        target='_blank'
        rel='noreferrer'
        className='block w-full'
      >
        <div className='absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-20 hover:bg-black  hover:bg-opacity-80 flex justify-center items-center transition-opacity druation-200'>
          {hovered && (
            <p className='text-white tracking-tighter text-sm lg:text-lg font-bold text-center p-1'>
              {props.title ? props.title : props.name}
            </p>
          )}
        </div>
        <img
          src={props.img}
          className='object-contain w-full'
          alt={`${props.title} poster`}
        />
      </a>
    </div>
  );
};

export default MovieTile;
