import NavBar from '../components/NavBar';

const Layout = ({ children }) => {
  return (
    <div className='overflow-hidden'>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
