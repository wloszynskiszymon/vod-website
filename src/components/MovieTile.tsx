import React from 'react';
import { checkIsNew } from '../utilities/UtilitiesFunctions';
import { FixMeLater } from '../types/types';

const MovieTile = ({ data }: FixMeLater) => {
  const { id, title, name, date, media_type, image } = data;

  // const onClickHandler = () => navigate(`/${media_type}/${id}`);

  return (
    <div className='bg-blue-950 group w-full flex justify-center items-center relative border-2 border-gray-600 drop-shadow-2xl cursor-pointer rounded-xl overflow-hidden hover:border-white transition-all duration-200 hover:scale-105  '>
      <div
        // onClick={onClickHandler}
        rel='noreferrer'
        className='block w-full h-full'
      >
        <div className='absolute top-0 left-0 w-full h-full flex-center bg-gray-900 bg-opacity-20 transition-opacity duration-200 group-hover:bg-black group-hover:bg-opacity-80 '>
          <p className='text-white tracking-tighter text-sm lg:text-lg font-bold text-center p-1 opacity-0 group-hover:opacity-100 duration-200 '>
            {title ? title : name}
          </p>
        </div>
        {checkIsNew(date) && (
          <div className='absolute opacity-1 -top-3 -right-3 lg:-top-4 lg:-right-4 translate-x-1/3 translate-y-3/4 w-full h-1/4 bg-purple-800 rotate-45 flex-center group-hover:opacity-0'>
            <p className='text-white trakcing-wider text-[13px] sm:text-sm text-center'>
              NEW
            </p>
          </div>
        )}

        <img src={image} className='w-full h-full' alt={`${title}`} />
      </div>
    </div>
  );
};

export default React.memo(MovieTile);
