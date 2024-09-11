import { SliderShow } from "@/types/types";
import MediaSliderItem from "../slider-item/MediaSliderItem";
import Slider from "./components/Content";
import SliderRoot from "./components/Root";
import SliderTitle from "./components/Title";

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
          <MediaSliderItem
            key={show.id + show.releaseDate}
            mediaType={mediaType}
            {...show}
          />
        ))}
      </Slider>
    </SliderRoot>
  );
};

export default MediaSlider;
