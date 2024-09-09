import { FixMeLater } from "../../types/types";
import Slider from "./Slider";
import SliderTitle from "./SliderTitle";

type MediaSliderProps = {
  data: FixMeLater;
};
const MediaSlider: React.FC<MediaSliderProps> = ({ data }) => {
  return (
    <section>
      <SliderTitle>Title here</SliderTitle>
      <Slider>
        {data.map((item: FixMeLater) => (
          <div key="item" className="flex-center h-32 w-48 bg-red-500">
            {item}
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default MediaSlider;
