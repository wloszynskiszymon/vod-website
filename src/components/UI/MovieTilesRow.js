import MovieTile from './MovieTile';

const MovieTilesRow = (props) => {
  const isMovie = props.isMovie;
  const headingTitle = `Najpopularniejsze ${isMovie ? 'filmy' : 'seriale'}`;

  const movieTiles = props.data.map((data) => {
    return (
      <MovieTile
        id={data.id}
        key={data.id}
        isMovie={isMovie}
        img={
          data.backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`
            : null
        }
        title={isMovie ? data.title : data.name}
      />
    );
  });

  return (
    <section className='w-full flex flex-col items-center justify-center'>
      <h2 className='text-white font-extrabold self-start text-2xl uppercase mt-6 mb-2 px-40 tracking-wider'>
        {headingTitle}
      </h2>
      <div className='px-40 w-full grid grid-cols-5 gap-4 py-2'>
        {movieTiles}
      </div>
    </section>
  );
};

export default MovieTilesRow;
