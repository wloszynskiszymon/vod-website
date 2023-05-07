import { useRef } from 'react';
import MovieTile from './MovieTile';

const MovieTilesRow = (props) => {
  const divRef = useRef(null);

  const movieTiles = props.data.map((data) => {
    return (
      <MovieTile
        id={data.id}
        key={data.id}
        isMovie={props.isMovie}
        img={
          data.backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`
            : null
        }
        title={data?.title || data?.name}
        date={data?.first_air_date || data?.release_date}
      />
    );
  });

  return (
    <div
      className={`w-full flex justify-center items-center flex-col flex-wrap overflow-x-auto pb-2 ${
        props.className ? props.className : ''
      }`}
    >
      <div className='relative px-4 md:px-15 lg:px-35'>
        <div
          ref={divRef}
          className='w-full flex justify-start gap-2 md:gap-4 py-1 transition duration-700'
        >
          {movieTiles}
        </div>
      </div>
    </div>
  );
};

export default MovieTilesRow;
