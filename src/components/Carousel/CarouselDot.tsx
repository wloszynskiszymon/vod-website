'use client';
import { FixMeLater } from '../../types/types';

const CarouselDot = ({ onClick, active }: FixMeLater) => {
  return (
    <button
      onClick={onClick}
      className={`hidden md:block w-3 h-3 rounded-full cursor-pointer transition duration-300 pointer-events-auto ${
        active ? 'bg-white' : 'bg-gray-500'
      }`}
    ></button>
  );
};

export default CarouselDot;
