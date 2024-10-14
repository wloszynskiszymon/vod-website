import { lazy } from "react";
import Main from "../../components/utils/Main";
import {
  sliderMoviesLinks,
  sliderTVsLink,
} from "../api/multi/image/utils/urls";
import { Header } from "./_components/header";
const Footer = lazy(() => import("../../components/utils/Footer"));

const MoviesSliderList = lazy(
  () => import("@/features/slider/variants/movie/MoviesSliderList"),
);
const TVsSliderList = lazy(
  () => import("@/features/slider/variants/tv/TVsSliderList"),
);

const Page = async () => {
  return (
    <>
      <Header />
      <Main className="flex min-h-[80rem] flex-col gap-8 py-12 lg:gap-14 lg:py-16">
        <MoviesSliderList links={sliderMoviesLinks} />
        <TVsSliderList links={sliderTVsLink} />
      </Main>
      <Footer />
    </>
  );
};

export default Page;
