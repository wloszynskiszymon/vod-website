import Logo from '../assets/logo.png';
import '../index.css';
const NavBar = () => {
  return (
    <nav className='bg-blue-900 flex items-center shadow-xl px-40 h-20'>
      <img className='w-28 h-28' src={Logo} alt='Logo' />
      <div className='pl-8 flex space-x-4'>
        <a
          href='#'
          className='font-semibold text-lg text-gray-400 border-b-2 border-blue-300 '
        >
          Strona główna
        </a>
        <a href='#' className='font-semibold text-lg text-blue-300 '>
          Filmy
        </a>
        <a href='#' className='font-semibold text-lg text-blue-300 '>
          Seriale
        </a>
        <a href='#' className='font-semibold text-lg text-blue-300 '>
          Gatunki
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
