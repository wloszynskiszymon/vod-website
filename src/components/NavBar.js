import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='w-full fixed flex justify-around items-center px-2 sm:px-8 md:px-20 h-14 md:h-20 z-50 bg-gradient-to-t from-transparent to-gray-900 to-80%'>
      <img className='h-10 md:h-14' src={Logo} alt='Logo' />
      <div className='flex pl-2 md:pl-8 lg:pl-12 space-x-2 md:space-x-4'>
        <Link to='/' className='link-primary'>
          Main Page
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
