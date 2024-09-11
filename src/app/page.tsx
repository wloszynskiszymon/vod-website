import Footer from "../components/Footer";

import DiscoverMovieSlider from "@/features/slider/variants/movie/DiscoverMoviesSlider";
import NowPlayingMoviesSlider from "@/features/slider/variants/movie/NowPlayingMoviesSlider";
import PopularMoviesSlider from "@/features/slider/variants/movie/PopularMoviesSlider";
import TopRatedMoviesSlider from "@/features/slider/variants/movie/TopRatedMoviesSlider";

import DiscoverTVShowsSlider from "@/features/slider/variants/tv/DiscoverTVShowsSlider";
import NowPlayingTVShowsSlider from "@/features/slider/variants/tv/NowPlayingTVShowsSlider";
import PopularTVShowsSlider from "@/features/slider/variants/tv/PopularTVShowsSlider";
import TopRatedTVShowsSlider from "@/features/slider/variants/tv/TopRatedTVShowsSlider";
import Main from "../components/Main";
import Header from "../components/header/Header";

const Page = async () => {
  return (
    <>
      <Header />
      <Main className="flex min-h-[80rem] flex-col gap-14 py-16">
        <DiscoverMovieSlider />
        <NowPlayingMoviesSlider />
        <PopularMoviesSlider />
        <TopRatedMoviesSlider />
        <DiscoverTVShowsSlider />
        <NowPlayingTVShowsSlider />
        <PopularTVShowsSlider />
        <TopRatedTVShowsSlider />
      </Main>
      <Footer />
    </>
  );
};

export default Page;
