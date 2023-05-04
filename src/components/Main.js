import MovieTile from './UI/MovieTile';

const Main = () => {
  return (
    <main className='bg-gray-800 pt-10 pb-32'>
      <section className='w-full flex flex-col items-center justify-center'>
        <h2 className='text-white font-extrabold self-start text-2xl uppercase mt-6 mb-2 px-40 tracking-wider'>
          Najpopularniejsze filmy
        </h2>
        <div className='px-40 w-full grid grid-cols-5 gap-4 py-2'>
          <MovieTile />
          <MovieTile />
          <MovieTile />
          <MovieTile />
          <MovieTile />
        </div>
      </section>

      <section className='w-full flex flex-col items-center justify-center'>
        <h2 className='text-white font-extrabold self-start text-2xl uppercase mt-6 mb-2 px-40 tracking-wider'>
          Najpopularniejsze seriale
        </h2>
        <div className='px-40 w-full grid grid-cols-5 gap-4 py-2'>
          <MovieTile />
          <MovieTile />
          <MovieTile />
          <MovieTile />
          <MovieTile />
        </div>
      </section>
    </main>
  );
};

export default Main;
