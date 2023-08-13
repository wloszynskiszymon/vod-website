import MovieTile from './MovieTile';
import LeftArrowIcon from '../UI/LeftArrowIcon';
import RightArrowIcon from '../UI/RightArrowIcon';
import SliderDot from '../UI/SliderDot';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/movieSlider-slice';
import { useState } from 'react';

const MovieTilesRow = (props) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderMovieTiles = () => {
    const movieTiles = [];

    props.data.forEach((data) => {
      if (data.backdrop_path) {
        movieTiles.push(
          <MovieTile
            backdrop_path={data.backdrop_path}
            media_type={props.media_type}
            id={data.id}
            key={data.id}
            title={data?.title || data?.name}
            date={data?.first_air_date || data?.release_date}
          />
        );
      }
    });
    return movieTiles;
  };

  const handleDotClick = (page) => {
    dispatch(setCurrentPage({ sliderID: props.sliderID, page }));
  };

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < props.maxPages; i++) {
      const isActive = i === props.currentPage;
      dots.push(
        <SliderDot
          key={props.sliderID + i}
          onClick={() => handleDotClick(i)}
          isActive={isActive}
        />
      );
    }
    return dots;
  };

  return (
    <section
      className='overflow-hidden my-8'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='h-16 flex items-center justify-between'>
        <h2 className='h-full text-gray-300 font-extrabold self-start text-md md:text-2xl uppercase my-2 px-4 md:px-6 tracking-wider flex items-center justify-center'>
          <p>{props.title}</p>
          {/* {isHovered && (
            <figure className='h-full text-gray-300 font-extrabold self-start text-md md:text-2xl uppercase my-2 px-4 md:px-6 tracking-wider flex items-center justify-center'>
              <a className='ml-10 md:text-xs items-center' href='#dziwki'>
                <RightArrowIcon />
              </a>
            </figure>
          )} */}
        </h2>

        <div className='flex gap-2 mx-8'>{isHovered && renderDots()}</div>
      </div>

      <div className='relative'>
        {isHovered && props.currentPage > 0 && (
          <button
            className='absolute flex justify-center items-center top-0 left-0 h-full w-12 bg-blue-950 bg-opacity-30 hover:bg-opacity-70 transition duration-200 z-20 cursor-pointer rounded-r-3xl'
            onClick={() => props.handleLeftButtonClick(props.sliderID)}
          >
            <figure className='scale-75'>
              <LeftArrowIcon />
            </figure>
          </button>
        )}

        {isHovered && props.currentPage < props.maxPages - 1 && (
          <button
            className='absolute flex justify-center items-center top-0 right-0 h-full w-12 bg-blue-950 bg-opacity-30 hover:bg-opacity-70 transition duration-200 z-20 cursor-pointer rounded-l-3xl'
            onClick={() => props.handleRightButtonClick(props.sliderID)}
          >
            <figure className='scale-75'>
              <RightArrowIcon />
            </figure>
          </button>
        )}

        <div
          className={`flex justify-center flex-col flex-wrap ${
            props.className ? props.className : ''
          }`}
        >
          <div
            className='px-6 w-[300rem] flex justify-center align-center gap-2 md:gap-4 py-1 transition duration-700'
            style={{
              transform: `translateX(-${
                (100 / props.maxPages) * props.currentPage
              }%)`,
            }}
          >
            {renderMovieTiles()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieTilesRow;
