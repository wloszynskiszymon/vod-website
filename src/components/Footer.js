import Logo from '../assets/logo_stopka.png';

const Footer = () => {
  return (
    <footer className=' bg-gray-950 px-12 py-8 bg-gradient-to-r from-gray-950  via-[rgb(18,29,40)] to-gray-950'>
      <div className='w-full h-full'>
        <div className='flex justify-center items-center flex-col'>
          <img className='h-20' src={Logo} alt='logo' />
          <a
            className='font-bold text-white mb-2 tracking-wider hover:underline underline-offset-2'
            href='https://developers.themoviedb.org/3'
            rel='noreferrer'
            target='_blank'
          >
            API
          </a>
          <a
            href='https://github.com/wloszynskiszymon'
            target='_blank'
            rel='noreferrer'
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
