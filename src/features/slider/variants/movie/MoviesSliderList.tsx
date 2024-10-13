import { SliderLink } from "@/app/api/multi/image/utils/urls";
import React from "react";
import MoviesSlider from "./MoviesSlider";

type MoviesSliderListProps = {
  links: SliderLink[];
};
const MoviesSliderList: React.FC<MoviesSliderListProps> = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <MoviesSlider key={link.title} {...link} />
      ))}
    </>
  );
};

export default MoviesSliderList;
