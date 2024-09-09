import Footer from "../components/Footer";

import Main from "../components/Main";
import Header from "../features/header/Header";
import MediaSliderList from "../features/slider/MediaSliderList";

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
