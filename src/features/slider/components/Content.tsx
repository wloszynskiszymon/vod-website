"use client";
import { PropsWithChildren } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Arrow from "./controls/Arrow";
import SliderDot from "./controls/Dot";

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
      itemClass={"px-2 lg:px-4"}
      customDot={<SliderDot />}
      dotListClass="carousel-dot-list-overriden pointer-events-none"
      renderDotsOutside={true}
      containerClass="py-2 md:py-4 h-32"
      customRightArrow={<Arrow.Right />}
      customLeftArrow={<Arrow.Left />}
      swipeable={false}
    >
      {children}
    </Carousel>
  );
};

export default SliderContent;
