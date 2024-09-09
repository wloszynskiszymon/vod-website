"use client";
import { createContext, MouseEventHandler, ReactNode } from "react";
import LeftArrowIcon from "../../../../components/UI/Icons/LeftArrowIcon";
import RightArrowIcon from "../../../../components/UI/Icons/RightArrowIcon";

type ArrowButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

type ArrowContextType = {
  Left: ({ onClick }: ArrowButtonProps) => JSX.Element;
  Right: ({ onClick }: ArrowButtonProps) => JSX.Element;
};

const ArrowContext = createContext<ArrowContextType | undefined>(undefined);

const commonClasses =
  "absolute flex-center top-25 h-4/5 w-8 md:w-12 bg-blue-950 bg-opacity-30 hover:bg-opacity-70 transition duration-200 z-20";

const Left = ({ onClick }: ArrowButtonProps) => {
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

const Right = ({ onClick }: ArrowButtonProps) => {
  return (
    <button
      aria-label="carousel-right-arrow"
      className={`${commonClasses} right-0 rounded-l-3xl`}
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
