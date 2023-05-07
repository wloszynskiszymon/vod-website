import InputSearch from './UI/InputSearch';

const Header = (props) => {
  return (
    <header id='start' className='h-[35rem] lg:h-[45rem] relative bg-gray-900'>
      <img
        src={props.img}
        alt='Header background'
        className='w-full lg:w-5/6 h-full absolute transfrom top-0 left-1/2 -translate-x-1/2 bg-center object-cover'
      />
      <div
        className={`m-auto w-full lg:w-11/12 h-full px-0 z-10 relative bg-gradient-to-r from-gray-900 from-10% md:from-3% via-[rgba(17,24,39,0.6)] via-50% to-gray-900 to-90% md:to-97%`}
      >
        <div className='flex flex-col justify-end items-center h-2/5 lg:h-1/2 lg:px-20 xl:px-40'>
          <h1 className='text-3xl md:text-4xl lg:text-6xl font-extrabold text-gray-300 mb-4 tracking-wider'>
            Odkryj Filmi
            <span className='text-purple-500 font-bold'>X</span>
          </h1>
          <p className='mb-10 text-xl md:text-2xl lg:text-3xl text-gray-300 tracking-tighter'>
            Najlepsze <span className='text-purple-500 font-bold'>filmy </span>i
            <span className='text-purple-500 font-bold'> seriale!</span>
          </p>
        </div>
        <InputSearch />
      </div>
    </header>
  );
};

export default Header;
