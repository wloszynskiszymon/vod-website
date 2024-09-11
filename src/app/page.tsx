import Footer from "../components/Footer";

import Main from "../components/Main";
import Header from "../components/header/Header";

const Page = async () => {
  // const { data } = await axios.get("http://localhost:3000/api/slider");
  // console.log(data);
  // const id = data[0].data[0].id;
  // console.log(data[0].data[0]);
  // const imagesUrl = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}`;
  // const photos = await axios.get(imagesUrl);
  // const image = photos.data.backdrops[0].file_path;
  // console.log(image);

  // const backdropUrl = `https://image.tmdb.org/t/p/w300${image}`;

  return (
    <>
      <Header />
      <Main className="flex min-h-[80rem] flex-col gap-14 py-16">
        {/* <Image
          width={image.width | 300}
          height={image.height | 160}
          src={backdropUrl}
          alt="Test"
        /> */}
        {/* <MediaSliderList data={data} /> */}
      </Main>
      <Footer />
    </>
  );
};

export default Page;
