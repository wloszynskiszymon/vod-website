import SearchIcon from './UI/SearchIcon';

const Header = () => {
  return (
    <header className='w-screen h-[45rem] bg-gray-900 '>
      <div className='flex justify-center items-center flex-col m-auto w-3/4 h-full px-40 bg-[linear-gradient(to_right,rgba(17,24,39,1),rgba(17,24,39,0.6),rgba(17,24,39,0.6),rgba(17,24,39,1)),url("https://media.vanityfair.com/photos/5759c5621e43ab7160f25bcb/16:9/w_1280,c_limit/warcraft-movie-review.jpg")]  bg-cover bg-center'>
        <h1 className='text-6xl font-extrabold text-white mb-6'>
          Welcome to the website!
        </h1>
        <p className='mb-20 text-4xl text-gray-300'>
          Find the best{' '}
          <span className='text-purple-600 font-bold'>movies!</span>
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
