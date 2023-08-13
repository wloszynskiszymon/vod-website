import { useEffect, useState } from 'react';
import MovieTilesRow from './MovieTiles/MovieTilesRow';
import ErrorIcon from './UI/ErrorIcon';
import { PulseLoader } from 'react-spinners';
import { ErrorBoundary } from 'react-error-boundary';

import { useDispatch, useSelector } from 'react-redux';
import { fetchMedias } from '../store/media-slice';
import { decrement, increment, initSlider } from '../store/movieSlider-slice';

import { MAIN_LINKS } from '../constants';

const Main = () => {
  const dispatch = useDispatch();
  const sliderData = useSelector((state) => state.movieSliderSlice.sliders);
  const [IDs, setIDs] = useState([]);

  const {
    status: moviesStatus,
    error: moviesError,
    data: moviesData,
  } = useSelector((state) => state.mediaSlice.main);

  useEffect(() => {
    if (moviesStatus === 'idle') {
      dispatch(fetchMedias({ links: MAIN_LINKS, dataLocation: 'main' }));
    }
  }, [dispatch, moviesStatus]);

  useEffect(() => {
    if (moviesStatus === 'succeeded') {
      const tempIDs = [];
      moviesData.data.forEach((movieTileData) => {
        dispatch(
          initSlider({ sliderID: movieTileData.id, data: movieTileData.data })
        );
        tempIDs.push(movieTileData.id);
      });
      setIDs(tempIDs);
      return;
    }
  }, [dispatch, moviesData, moviesStatus]);

  const renderSpinnerCondition = moviesStatus === 'loading';
  const renderErrorCondition = moviesError === 'rejected';

  const handleLeftButtonClick = (sliderID) => {
    dispatch(decrement(sliderID));
  };

  const handleRightButtonClick = (sliderID) => {
    dispatch(increment(sliderID));
  };

  const findSlider = function (sliderID) {
    return sliderData.find((slider) => slider.sliderID === sliderID);
  };

  return (
    <main className='pt-12 pb-24 bg-gradient-to-r from-neutral-900  via-[rgb(31,41,55)] to-neutral-900'>
      {renderSpinnerCondition ? (
        <div className='my-10 flex-center'>
          <PulseLoader color={'Silver'} size={20} />
        </div>
      ) : renderErrorCondition ? (
        <ErrorBoundary>
          <div className='text-gray-300 text-center font-extrabold text-xl flex-center'>
            <ErrorIcon />
            <p className='ml-2'>Something went wrong...</p>
          </div>
        </ErrorBoundary>
      ) : (
        <>
          {moviesData &&
            moviesStatus === 'succeeded' &&
            IDs.map((id) => {
              const slider = findSlider(id);
              if (!slider) {
                return null;
              }

              const { currentPage, maxPages } = slider;

              const movieTileData = moviesData.data.find(
                (data) => data.id === id
              );

              return (
                <MovieTilesRow
                  key={id}
                  data={movieTileData.data}
                  sliderID={id}
                  title={movieTileData.title}
                  media_type={movieTileData.media_type}
                  handleLeftButtonClick={(sliderID) =>
                    handleLeftButtonClick(sliderID)
                  }
                  handleRightButtonClick={(sliderID) => {
                    handleRightButtonClick(sliderID);
                  }}
                  currentPage={currentPage}
                  maxPages={maxPages}
                />
              );
            })}
        </>
      )}
    </main>
  );
};

export default Main;
