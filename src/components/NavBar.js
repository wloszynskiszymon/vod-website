import Logo from '../assets/logo.png';
import '../index.css';
const NavBar = () => {
  return (
    <nav className='flex justify-around items-center px-60 h-20 bg-transparent fixed'>
      <img className='w-28 h-28' src={Logo} alt='Logo' />
      <div className='pl-12 flex space-x-4'>
        <a
          href='#'
          className='font-semibold text-lg text-gray-300 border-b-2 border-blue-200 '
        >
          Strona główna
        </a>
        <a href='#' className='font-semibold text-lg text-blue-200 '>
          Filmy
        </a>
        <a href='#' className='font-semibold text-lg text-blue-200 '>
          Seriale
        </a>
        <a href='#' className='font-semibold text-lg text-blue-200 '>
          Gatunki
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
