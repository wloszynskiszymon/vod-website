import { SliderShow } from "@/types/types";
import Image from "next/image";
import Slider from "../components/Content";
import SliderRoot from "../components/Root";
import SliderTitle from "../components/Title";

type MediaSliderProps = {
  title: string;
  mediaType: "movie" | "tv";
  shows: SliderShow[];
};

const MediaSlider: React.FC<MediaSliderProps> = ({
  title,
  shows,
  mediaType,
}) => {
  return (
    <SliderRoot>
      <SliderTitle>{title}</SliderTitle>
      <Slider>
        {shows.map((show: SliderShow) => (
          <div
            key={`${mediaType}-${show.id}`}
            className="flex-center h-32 w-48 overflow-hidden bg-slate-950"
          >
            <Image
              className="h-full w-full object-cover"
              width={300}
              height={169}
              src={`https://image.tmdb.org/t/p/w45/${show.image}`}
              alt={show.title}
            />
          </div>
        ))}
      </Slider>
    </SliderRoot>
  );
};

export default MediaSlider;
