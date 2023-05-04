import SearchIcon from './UI/SearchIcon';

const Header = (props) => {
  return (
    <header className='h-[45rem] relative bg-gray-900'>
      <img
        src={props.img}
        alt='Header background'
        className='w-5/6 h-full absolute transfrom top-0 left-1/2 -translate-x-1/2 bg-cover bg-center'
      />
      <div
        className={`flex justify-center items-center flex-col m-auto w-11/12 h-full px-40 z-10 relative bg-gradient-to-r from-gray-900 from-10% via-[rgba(17,24,39,0.6)] via-50% to-gray-900 to-90%`}
      >
        <h1 className='text-6xl font-extrabold text-white mb-6'>
          Witamy na stronie!
        </h1>
        <p className='mb-20 text-4xl text-gray-300'>
          Znajdź najlepsze{' '}
          <span className='text-purple-600 font-bold'>filmy!</span>
        </p>
        <div className='relative w-2/5 flex justify-center items-center'>
          <input
            className='px-4 py-2 pr-16 border border-purple-700 text-white bg-gray-900 rounded-full w-full'
            type='text'
            placeholder='Search...'
          />
          <figure className='flex justify-center items-center bg-purple-700 h-full px-4 py-1 absolute right-0 bottom-0 rounded-r-full'>
            <SearchIcon />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Header;
