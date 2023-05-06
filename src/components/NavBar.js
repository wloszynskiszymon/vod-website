import Logo from '../assets/logo.png';
import '../index.css';
const NavBar = () => {
  return (
    <nav className='w-full flex justify-around items-center px-10 md:px-20 h-20 bg-transparent fixed backdrop-blur-sm z-50'>
      <img className='h-10 md:h-14' src={Logo} alt='Logo' />
      <div className='pl-12 flex space-x-4'>
        <a
          href='#'
          className='font-semibold text-sm md:text-lg text-gray-300 border-b-2 border-blue-200 drop-shadow-2xl'
        >
          Strona główna
        </a>
        <a
          href='#'
          className='font-semibold text-sm md:text-lg text-blue-200 drop-shadow-2xl'
        >
          Filmy
        </a>
        <a
          href='#'
          className='font-semibold  text-sm md:text-lg text-blue-200 drop-shadow-2xl'
        >
          Seriale
        </a>
        <a
          href='#'
          className='font-semibold text-sm md:text-lg text-blue-200 drop-shadow-2xl'
        >
          Gatunki
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
