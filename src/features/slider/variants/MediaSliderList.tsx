import React from "react";
import MediaSlider from "./MediaSlider";

const medias = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

type MediaSliderProps = {
  data: unknown[];
};
const MediaSliderList: React.FC<MediaSliderProps> = ({ data }) => {
  return data.map((mediaData: unknown, i: number) => (
    <MediaSlider key={`slider-${i}`} data={medias} />
  ));
};

export default MediaSliderList;
