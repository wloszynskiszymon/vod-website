import { SliderLink } from "@/app/api/multi/image/utils/urls";
import React from "react";
import TVsSlider from "./TVsSlider";

type TVsSliderListProps = {
  links: SliderLink[];
};
const TVsSliderList: React.FC<TVsSliderListProps> = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <TVsSlider key={link.title} {...link} />
      ))}
    </>
  );
};

export default TVsSliderList;
