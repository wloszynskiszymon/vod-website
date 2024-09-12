import TextImportant from "@/components/utils/TextImportant";
import { fetchRandomImage } from "@/services/tmdb/FetchRandomImage";
import Image from "next/image";
import HeaderSearchInput from "../HeaderSearchInput";
import HeaderDescription from "./Description";
import HeaderTitle from "./Title";

const gradient =
  "bg-gradient-to-r from-[rgba(17,24,39,0.6)] from-10% via-[rgba(17,24,39,0.6)] via-50% to-[rgba(17,24,39,0.6)] to-90% px-2 md:from-gray-900 md:via-[rgba(17,24,39,0.6)] md:to-gray-900";

const Header = async () => {
  const { small, original } = await fetchRandomImage();

  return (
    <header className={`relative max-h-[90vh] ~h-[30rem]/[50rem]`}>
      {original && (
        <Image
          width={1920}
          height={1080}
          src={original}
          blurDataURL={small || undefined}
          alt="Header background"
          className={`absolute left-1/2 h-full max-h-full w-auto -translate-x-1/2 bg-center object-cover lg:w-5/6`}
        />
      )}

      <section
        className={`flex-center absolute h-full w-full flex-col gap-2 bg-transparent ${gradient}`}
      >
        <HeaderTitle className="~sm/lg:~text-4xl/7xl 2xl:text-8xl">
          <span>Discover Filmi</span>
          <TextImportant>X</TextImportant>
        </HeaderTitle>

        <HeaderDescription className="~sm/lg:~text-lg/3xl 2xl:text-4xl">
          The best <TextImportant> movies </TextImportant>
          and
          <TextImportant> TV shows!</TextImportant>
        </HeaderDescription>

        <HeaderSearchInput />
      </section>
    </header>
  );
};

export default Header;
