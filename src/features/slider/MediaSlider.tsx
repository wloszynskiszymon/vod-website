import { SliderShow } from "@/types/types";
import MediaSliderItem from "../SliderItem/MediaSliderItem";
import { SliderContent, SliderRoot, SliderTitle } from "./components";

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
      <SliderContent>
        {shows.map((show: SliderShow) => (
          <MediaSliderItem
            key={show.id + show.releaseDate}
            mediaType={mediaType}
            {...show}
          />
        ))}
      </SliderContent>
    </SliderRoot>
  );
};

export default MediaSlider;
