import HeaderDescription from "./HeaderDescription";
import HeaderInput from "./HeaderInput";
import HeaderTitle from "./HeaderTitle";

const Header = () => {
  // const { data: image } = useRandomImage();

  return (
    <header className="flex-center relative z-10 flex-col bg-gradient-to-r from-[rgba(17,24,39,0.6)] from-10% via-[rgba(17,24,39,0.6)] via-50% to-[rgba(17,24,39,0.6)] to-90% md:from-gray-900 md:via-[rgba(17,24,39,0.6)] md:to-gray-900">
      {/* {image && (
        <img
          src={image}
          alt='Header background'
          className='w-full lg:w-5/6 h-full absolute transfrom top-0 left-1/2 -translate-x-1/2 bg-center object-cover'
        /> 
      )} */}

      <HeaderTitle className="mb-4">
        <span>Discover Filmi</span>
        <span className="font-bold text-purple-500">X</span>
      </HeaderTitle>

      <HeaderDescription>
        The best <span className="font-bold text-purple-500">movies </span>
        and
        <span className="font-bold text-purple-500"> TV shows!</span>
      </HeaderDescription>

      <HeaderInput />
    </header>
  );
};

export default Header;
