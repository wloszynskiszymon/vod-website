import Logo from '../assets/logo_stopka.png';

const Footer = () => {
  return (
    <footer className=' bg-gray-950 px-12 py-8'>
      <div className='w-full h-full'>
        <div className='flex justify-center items-center flex-col'>
          <img className='h-20' src={Logo} alt='logo' />
          <a
            className='font-bold text-white mb-2 tracking-wider hover:underline underline-offset-2'
            href='https://developers.themoviedb.org/3'
            target='_blank'
          >
            API
          </a>
          <a
            href='https://github.com/wloszynskiszymon'
            target='_blank'
            className='text-gray-600 hover:underline underline-offset-2'
          >
            Copyright &#169; 2023 Szymon
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
