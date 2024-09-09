"use client";
import { FixMeLater } from "../../types/types";

const SliderDot = ({ onClick, active }: FixMeLater) => {
  return (
    <button
      aria-label="carousel-dot"
      onClick={onClick}
      className={`pointer-events-auto hidden size-3 cursor-pointer rounded-full transition duration-300 md:block ${
        active ? "bg-white" : "bg-gray-500"
      }`}
    ></button>
  );
};

export default SliderDot;
