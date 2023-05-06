import { useState } from 'react';

const MovieTile = (props) => {
  const [hovered, setHovered] = useState(false);
  const handleHover = () => setHovered(true);
  const handleLeave = () => setHovered(false);

  const hasImage = props.img ? props.img : null;
  const URL = `https://www.themoviedb.org/${props.isMovie ? 'movie' : 'tv'}/`;

  return (
    <div
      className='flex justify-center items-center relative border-2 border-purple-800 shadow-2xl overflow-hidden hover:border-white transition-all hover:scale-105 cursor-pointer '
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <a href={URL + props.id} target='_blank' rel='noreferrer'>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-0 bg-opacity-0 hover:bg-opacity-60 hover:opacity-100 flex justify-center items-center transition-opacity druation-200'>
          <p className='text-white tracking-tighter lg:text-sm text-lg font-bold text-center'>
            {props.title ? props.title : props.name}
          </p>
        </div>
        {hasImage && (
          <img
            src={hasImage}
            className='bg-cover'
            alt={`${props.title} poster`}
          />
        )}

        {!hasImage && !hovered && (
          <p className='text-gray-500 tracking-tighter lg:text-sm text-lg font-bold text-center'>
            No movie poster
          </p>
        )}
      </a>
    </div>
  );
};

export default MovieTile;
