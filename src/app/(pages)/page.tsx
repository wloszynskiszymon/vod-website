import MoviesSliderList from "@/features/Slider/variants/movie/MoviesSliderList";
import TVsSliderList from "@/features/Slider/variants/tv/TVsSliderList";
import Footer from "../../components/utils/Footer";
import Main from "../../components/utils/Main";
import {
  sliderMoviesLinks,
  sliderTVsLink,
} from "../api/multi/image/utils/urls";
import { Header } from "./_components/Header";

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
