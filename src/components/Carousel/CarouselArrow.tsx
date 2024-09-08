'use client';
import { FixMeLater } from '../../types/types';
import LeftArrowIcon from '../UI/Icons/LeftArrowIcon';
import RightArrowIcon from '../UI/Icons/RightArrowIcon';
import { createContext } from 'react';

const ArrowContext = createContext<FixMeLater>('');

const commonClasses =
  'absolute flex-center top-25 h-4/5 w-8 md:w-12 bg-blue-950 bg-opacity-30 hover:bg-opacity-70 transition duration-200 z-20';

const Left = ({ onClick }: FixMeLater) => {
  return (
    <button
      className={`${commonClasses} left-0 rounded-r-3xl`}
      onClick={onClick}
    >
      <LeftArrowIcon />
    </button>
  );
};
const Right = ({ onClick }: FixMeLater) => {
  return (
    <button
      className={`${commonClasses} right-0 rounded-l-3xl`}
      onClick={onClick}
    >
      <RightArrowIcon />
    </button>
  );
};

const CarouselArrow = () => {
  return (
    <ArrowContext.Provider value={{ Left, Right }}></ArrowContext.Provider>
  );
};

CarouselArrow.Left = Left;
CarouselArrow.Right = Right;

export default CarouselArrow;
