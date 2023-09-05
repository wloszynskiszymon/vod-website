import NavBar from '../components/NavBar';
import DeleteIcon from '../components/UI/Icons/DeleteIcon';
import { useRef, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { PulseLoader } from 'react-spinners';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

import { renderMovieTiles } from '../utilities/UtilitiesFunctions';

import { handleInfiniteScroll } from '../utilities/UtilitiesFunctions';

const SearchPage = () => {
  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);
  const [inputValue, setInputValue] = useState('' || queryParameters.get('q'));

  const navigate = useNavigate();
  const inputRef = useRef('');
  const scrollContainerRef = useRef(null);

  const {
    data,
    isLoading,
    isError,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteScroll('search/multi', {
    query: inputValue,
  });

  const onSearchHandler = (e) => {
    const query = e.target.value;
    if (e.key === 'Enter' && query.length !== 0) {
      setInputValue(query);
      navigate(`/search?q=${query}`);
    }
  };

  const onChangeHandler = (e) => {
    const query = e.target.value;
    setInputValue(query);
    navigate(`/search?q=${query}`);
  };

  const onClickHandler = () => {
    queryParameters.delete('q');
    setInputValue('');
    navigate('/');
  };

  return (
    <div className='overflow-hidden w-screen h-screen'>
      <NavBar />
      <div className='w-full h-16 bg-blue-950 transform translate-y-20 flex flex-center px-6 '>
        <input
          placeholder='Wpisz nazwę filmu lub serialu...'
          type='text'
          onKeyDown={onSearchHandler}
          onChange={onChangeHandler}
          ref={inputRef}
          className='text-white bg-blue-950 font-bold text-3xl w-11/12 h-full outline-none'
          value={inputValue}
          autoFocus
        />
        <div onClick={onClickHandler} className='cursor-pointer'>
          <DeleteIcon />
        </div>
      </div>

      <div
        className='w-full translate-y-28 h-full overflow-y-auto'
        ref={scrollContainerRef}
        onScroll={() =>
          handleInfiniteScroll(
            scrollContainerRef,
            isFetchingNextPage,
            hasNextPage,
            fetchNextPage
          )
        }
      >
        <div className='grid grid-cols-2 md:grid-cols-3 lg-grid-cols-4 xl:grid-cols-6 gap-4 w-full h-fit p-6'>
          {isSuccess && renderMovieTiles(data)}
          {isError && (
            <p className='text-gray-300 text-1xl text-center col-span-full'>
              No results found.
            </p>
          )}
          {isLoading && (
            <div className='col-span-full justify-self-center'>
              <PulseLoader color={'Silver'} size={20} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
