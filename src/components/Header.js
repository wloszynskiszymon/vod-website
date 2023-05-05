import InputSearch from './UI/InputSearch';

const Header = (props) => {
  return (
    <header className='h-[45rem] relative bg-gray-900'>
      <img
        src={props.img}
        alt='Header background'
        className='w-5/6 h-full absolute transfrom top-0 left-1/2 -translate-x-1/2 bg-cover bg-center'
      />
      <div
        className={`m-auto w-11/12 h-full px-40 z-10 relative bg-gradient-to-r from-gray-900 from-10% via-[rgba(17,24,39,0.6)] via-50% to-gray-900 to-90%`}
      >
        <div className='flex flex-col justify-end items-center h-1/2'>
          <h1 className='text-6xl font-extrabold text-white mb-4'>
            Witamy na stronie!
          </h1>
          <p className='mb-10 text-4xl text-gray-300'>
            Znajdź najlepsze{' '}
            <span className='text-purple-600 font-bold'>filmy!</span>
          </p>
        </div>

        <InputSearch />
      </div>
    </header>
  );
};

export default Header;
