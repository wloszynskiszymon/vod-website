import React, { useContext, useRef } from 'react';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import {
  handleInfiniteScroll,
  renderMovieTiles,
} from '../../../utilities/UtilitiesFunctions';
import { TabBoxContext } from '../TabBox';
import { PulseLoader } from 'react-spinners';

const TabSimilar = ({ mediaType, id, name }) => {
  const { activeTab } = useContext(TabBoxContext);
  const scrollContainerRef = useRef(null);

  const {
    data,
    isSuccess,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteScroll(`${mediaType}/${id}/similar`, {}, mediaType);

  if (activeTab !== name) {
    return null;
  }

  return (
    <div className='w-full h-full'>
      {isSuccess && (
        <div
          ref={scrollContainerRef}
          onScroll={() =>
            handleInfiniteScroll(
              scrollContainerRef,
              isFetchingNextPage,
              hasNextPage,
              fetchNextPage
            )
          }
          className='grid grid-cols-2 sm:grid-cols-3 gap-4 px-2 sm:p-4 w-full h-full overflow-y-auto sm:-translate-x-4 -translate-x-2'
        >
          {renderMovieTiles(data)}
        </div>
      )}
      {isLoading && (
        <div className='w-full h-full flex justify-center'>
          <PulseLoader color={'Silver'} size={20} />
        </div>
      )}
    </div>
  );
};

export default React.memo(TabSimilar);
