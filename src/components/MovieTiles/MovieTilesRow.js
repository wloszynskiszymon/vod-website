import MovieTile from './MovieTile';
import LeftArrowIcon from '../UI/Icons/LeftArrowIcon';
import RightArrowIcon from '../UI/Icons/RightArrowIcon';
import SliderDot from '../UI/SliderDot';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/movieSlider-slice';

const MovieTilesRow = (props) => {
  const dispatch = useDispatch();

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
    <section className='overflow-hidden my-8'>
      <div className='h-full flex items-center justify-between align-center'>
        <h2 className='h-full text-gray-300 font-extrabold self-start text-md md:text-2xl uppercase my-2 px-4 md:px-6 tracking-wider flex items-center justify-center'>
          <p>{props.title}</p>
        </h2>

        <div className='flex gap-1 lg:gap-2 mx-4 lg:mx-8'>{renderDots()}</div>
      </div>

      <div className='relative'>
        {props.currentPage > 0 && (
          <button
            className='absolute flex justify-center items-center top-0 left-0 h-full w-12 bg-blue-950 bg-opacity-30 hover:bg-opacity-70 transition duration-200 z-20 cursor-pointer rounded-r-3xl'
            onClick={() => props.handleLeftButtonClick(props.sliderID)}
          >
            <figure className='scale-75'>
              <LeftArrowIcon />
            </figure>
          </button>
        )}

        {props.currentPage < props.maxPages - 1 && (
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
