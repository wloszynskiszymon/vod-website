import Footer from "../components/Footer";

import Main from "../components/Main";
import Header from "../components/header/Header";
import MediaSliderList from "../features/slider/variants/MediaSliderList";

const data = [0, 1, 2, 3, 4, 5, 6];
const Page = () => {
  return (
    <>
      <Header />
      <Main>
        <MediaSliderList data={data} />
      </Main>
      <Footer />
    </>
  );
};

export default Page;
