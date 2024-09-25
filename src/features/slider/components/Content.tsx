"use client";
import { PropsWithChildren } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./controls/ButtonGroup";
import Dot from "./controls/Dot";

const sliderBreakpoints = {
  desktop_xl: {
    breakpoint: { max: 1920, min: 1366 },
    items: 6,
    slidesToSlide: 6,
  },
  desktop: {
    breakpoint: { max: 1366, min: 1200 },
    items: 5,
    slidesToSlide: 5,
  },
  laptop: {
    breakpoint: { max: 1200, min: 768 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};

type SliderContentProps = PropsWithChildren;
const SliderContent: React.FC<SliderContentProps> = ({
  children,
  ...props
}) => {
  return (
    <Carousel
      {...props}
      responsive={sliderBreakpoints}
      showDots={true}
      infinite={true}
      itemClass="p-2"
      customDot={<Dot />}
      dotListClass="!top-3 !gap-2 !justify-end !mr-20 pointer-events-none"
      renderDotsOutside={true}
      renderButtonGroupOutside={true}
      customButtonGroup={<ButtonGroup />}
      swipeable={false}
      partialVisbile={false}
      arrows={false}
    >
      {children}
    </Carousel>
  );
};

export default SliderContent;
