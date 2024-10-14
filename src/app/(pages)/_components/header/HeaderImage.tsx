import { fetchRandomImage } from "@/services/tmdb/FetchRandomImage";
import Image from "next/image";

const HeaderImage = async () => {
  const image = await fetchRandomImage();

  return (
    <Image
      width={1280}
      height={720}
      src={image!!}
      loading="eager"
      alt="Header background"
      className={`absolute left-1/2 h-full max-h-full w-auto -translate-x-1/2 bg-center object-cover lg:w-5/6`}
      priority
    />
  );
};

export default HeaderImage;
