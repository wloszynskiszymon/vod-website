import { createContext, useContext, useState } from 'react';
import Logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const ActiveLinkContext = createContext();

const NavBar = () => {
  const location = useLocation();

  const commonClasses =
    'font-semibold text-sm md:text-lg tracking-tighter border-b-2 drop-shadow-2xl transition duration-200 px-1';
  const inactiveClasses = 'text-gray-300 border-transparent';
  const activeClasses = 'text-blue-300 border-blue-300';

  return (
    <nav className='w-full fixed flex justify-around items-center px-2 sm:px-8 md:px-20 h-14 md:h-20 z-50 bg-gradient-to-t from-transparent to-gray-900 to-80%'>
      <img className='h-10 md:h-14' src={Logo} alt='Logo' />
      <div className='flex pl-2 md:pl-8 lg:pl-12 space-x-2 md:space-x-6'>
        <Link
          to='/'
          className={`${commonClasses} ${
            location.pathname === '/' ? activeClasses : inactiveClasses
          }`}
        >
          Home
        </Link>
        <Link
          to='/movies'
          className={`${commonClasses} ${
            location.pathname.startsWith('/movies')
              ? activeClasses
              : inactiveClasses
          }`}
        >
          Movies
        </Link>
        <Link
          to='/series'
          className={`${commonClasses} ${
            location.pathname.startsWith('/series')
              ? activeClasses
              : inactiveClasses
          }`}
        >
          Series
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

export const ActiveLinkProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState('main');

  const setLink = (link) => {
    setActiveLink(link);
  };

  return (
    <ActiveLinkContext.Provider value={{ activeLink, setLink }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};

export const useActiveLink = () => {
  const context = useContext(ActiveLinkContext);
  if (!context) {
    throw new Error('useActiveLink must be used within an ActiveLinkProvider');
  }
  return context;
};
