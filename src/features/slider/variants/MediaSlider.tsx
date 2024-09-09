import { FixMeLater } from "../../../types/types";
import Slider from "../components/Content";
import SliderRoot from "../components/Root";
import SliderTitle from "../components/Title";

type MediaSliderProps = {
  data: FixMeLater;
};
const MediaSlider: React.FC<MediaSliderProps> = ({ data }) => {
  return (
    <SliderRoot>
      <SliderTitle>Title here</SliderTitle>
      <Slider>
        {data.map((item: FixMeLater) => (
          <div key="item" className="flex-center h-32 w-48 bg-red-500">
            {item}
          </div>
        ))}
      </Slider>
    </SliderRoot>
  );
};

export default MediaSlider;
