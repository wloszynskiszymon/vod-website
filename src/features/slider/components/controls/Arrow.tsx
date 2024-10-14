"use client";
import LeftArrowIcon from "@/assets/icons/LeftArrowIcon";
import RightArrowIcon from "@/assets/icons/RightArrowIcon";
import { createContext, ReactNode } from "react";
import { ArrowProps } from "react-multi-carousel";

type ArrowContextType = {
  Left: ({ onClick }: ArrowProps) => JSX.Element;
  Right: ({ onClick }: ArrowProps) => JSX.Element;
};

const ArrowContext = createContext<ArrowContextType | undefined>(undefined);

const commonClasses =
  "absolute bottom-0 pointer-events-auto flex-center h-24 md:h-32 w-7 md:w-8 md:w-12 bg-blue-950 bg-opacity-30 hover:bg-opacity-70 transition duration-200 z-20";

const Left = ({ onClick }: ArrowProps) => {
  return (
    <button
      aria-label="carousel-left-arrow"
      className={`${commonClasses} left-0 rounded-r-3xl`}
      onClick={onClick}
    >
      <LeftArrowIcon />
    </button>
  );
};

const Right = ({ onClick }: ArrowProps) => {
  return (
    <button
      aria-label="carousel-right-arrow"
      className={`${commonClasses} right-0 z-30 rounded-l-3xl`}
      onClick={onClick}
    >
      <RightArrowIcon />
    </button>
  );
};

const Arrow = ({ children }: { children: ReactNode }) => {
  return (
    <ArrowContext.Provider value={{ Left, Right }}>
      {children}
    </ArrowContext.Provider>
  );
};

Arrow.Left = Left;
Arrow.Right = Right;

export default Arrow;
