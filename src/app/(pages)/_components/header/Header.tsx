import TextImportant from "@/components/utils/TextImportant";
import HeaderSearchInput from "../HeaderSearchInput";
import HeaderDescription from "./Description";
import HeaderTitle from "./Title";

import { lazy } from "react";

const HeaderImage = lazy(() => import("./HeaderImage"));

const gradient =
  "bg-gradient-to-r from-[rgba(17,24,39,0.6)] from-10% via-[rgba(17,24,39,0.6)] via-50% to-[rgba(17,24,39,0.6)] to-90% px-2 md:from-gray-900 md:via-[rgba(17,24,39,0.6)] md:to-gray-900";

const Header = () => {
  return (
    <header className={`relative max-h-[95vh] ~h-[30rem]/[50rem]`}>
      <HeaderImage />
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
