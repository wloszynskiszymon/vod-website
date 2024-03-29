import InputSearch from './UI/InputSearch';

import useRandomImage from '../hooks/useRandomImage';

const Header = () => {
  const { data: image } = useRandomImage();

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
