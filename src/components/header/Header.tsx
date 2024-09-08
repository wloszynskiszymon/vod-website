import HeaderInput from "../inputs/HeaderInput";
import SearchIcon from "../UI/Icons/SearchIcon";
import TextImportant from "../utils/TextImportant";
import HeaderDescription from "./HeaderDescription";
import HeaderTitle from "./HeaderTitle";

const gradient =
  "bg-gradient-to-r from-[rgba(17,24,39,0.6)] from-10% via-[rgba(17,24,39,0.6)] via-50% to-[rgba(17,24,39,0.6)] to-90% px-2 md:from-gray-900 md:via-[rgba(17,24,39,0.6)] md:to-gray-900";
const Header = () => {
  // const { data: image } = useRandomImage();

  return (
    <header
      className={`${gradient} flex-center ~h-[30rem]/[50rem] relative z-10 max-h-[90vh] flex-col gap-2`}
    >
      {/* {image && (
        <img
          src={image}
          alt='Header background'
          className='w-full lg:w-5/6 h-full absolute transfrom top-0 left-1/2 -translate-x-1/2 bg-center object-cover'
        /> 
      )} */}

      <HeaderTitle className="~sm/lg:~text-4xl/7xl 2xl:text-8xl">
        <span>Discover Filmi</span>
        <TextImportant>X</TextImportant>
      </HeaderTitle>

      <HeaderDescription className="~sm/lg:~text-lg/3xl 2xl:text-4xl">
        The best <TextImportant> movies </TextImportant>
        and
        <TextImportant> TV shows!</TextImportant>
      </HeaderDescription>

      <HeaderInput.Root className="~sm/2xl:~w-[25rem]/[50rem] mt-10 max-w-[90vw] xl:max-w-[60vw]">
        <HeaderInput.Input className="lg:text-lg 2xl:text-xl" />
        <HeaderInput.Icon>
          <SearchIcon />
        </HeaderInput.Icon>
      </HeaderInput.Root>
    </header>
  );
};

export default Header;
