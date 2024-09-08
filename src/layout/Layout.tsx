import NavBar from '../components/NavBar';
import { FixMeLater } from '../types/types';

const Layout = ({ children }: FixMeLater) => {
  return (
    <div className='overflow-hidden'>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
