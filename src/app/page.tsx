import Footer from "../components/Footer";

import Header from "../components/header/Header";
import Main from "../components/Main";
import MediaSliderList from "../components/slider/MediaSliderList";

const data = [0];
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
