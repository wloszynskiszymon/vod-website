import Footer from "../components/Footer";

import MoviesSliderList from "@/features/Slider/variants/movie/MoviesSliderList";
import TVsSliderList from "@/features/Slider/variants/tv/TVsSliderList";
import Header from "../components/header/Header";
import Main from "../components/Main";
import { sliderMoviesLinks, sliderTVsLink } from "./api/image/utils/urls";

const Page = async () => {
  return (
    <>
      <Header />
      <Main className="flex min-h-[80rem] flex-col gap-14 py-16">
        <MoviesSliderList links={sliderMoviesLinks} />
        <TVsSliderList links={sliderTVsLink} />
      </Main>
      <Footer />
    </>
  );
};

export default Page;
