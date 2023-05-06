import Logo from '../assets/logo.png';
import '../index.css';
const NavBar = () => {
  return (
    <nav className='w-full fixed flex justify-around items-center px-2 sm:px-8 md:px-20 h-14 md:h-20 z-50 bg-gradient-to-t from-transparent to-gray-900 to-80%'>
      <img className='h-10 md:h-14' src={Logo} alt='Logo' />
      <div className='flex pl-2 md:pl-8 lg:pl-12 space-x-2 md:space-x-4'>
        <a
          href='#start'
          rel='noreferrer'
          className='font-semibold text-sm md:text-lg tracking-tighter text-gray-300 border-b-2 border-transparent hover:border-blue-200 active:border-blue-300 active:text-blue-300 drop-shadow-2xl transition duration-200'
        >
          Strona główna
        </a>
        <a
          href='#movies'
          rel='noreferrer'
          className='font-semibold text-sm md:text-lg tracking-tighter text-gray-300 border-b-2 border-transparent hover:border-blue-200 active:border-blue-300 active:text-blue-300 drop-shadow-2xl transition duration-200'
        >
          Filmy
        </a>
        <a
          href='#series'
          rel='noreferrer'
          className='scroll-smooth font-semibold text-sm md:text-lg tracking-tighter text-gray-300 border-b-2 border-transparent hover:border-blue-200 active:border-blue-300 active:text-blue-300 drop-shadow-2xl transition duration-200'
        >
          Seriale
        </a>
        <a
          href='#comming-soon'
          rel='noreferrer'
          className='font-semibold text-sm md:text-lg tracking-tighter text-gray-300 border-b-2 border-transparent hover:border-blue-200 active:border-blue-300 active:text-blue-300 drop-shadow-2xl transition duration-200'
        >
          Gatunki
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
