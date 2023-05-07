import { useRef } from 'react';
import { API_KEY } from '../../hooks/useMedia';
import SearchIcon from './SearchIcon';

import axios from 'axios';

const InputSearch = (props) => {
  const inputRef = useRef(null);

  const search = (query) => {
    const API_URL_SEARCH = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`;
    axios
      .get(API_URL_SEARCH)
      .then((res) => {
        const filteredData = res.data.results.filter(
          (result) => !result.backdropPath && result.backdrop_path
        );
        props.setSearchResults(filteredData.slice(0, 3));
      })
      .catch((err) => console.error(err.message));
  };

  const onClickHandler = () => {
    const query = inputRef.current.value;
    if (query.length === 0) return;
    search(query);
  };

  const onSearchHandler = (e) => {
    if (e.key === 'Enter' && e.target.value.length !== 0) {
      const query = e.target.value;
      search(query);
    }
  };

  const onChangeHandler = () => {
    const query = inputRef.current.value;
    if (query.length === 0) {
      props.setSearchResults(null);
      return;
    }
    search(query);
  };

  return (
    <div
      className={`flex-center relative w-7/12 lg:w-2/5 2xl:w-1/4 mt-3 md:mt-5 lg:mt-10 mb-6 md:mb-10 2xl:mt-16 ${
        props.className ? props.className : ''
      }`}
    >
      <input
        className='px-4 py-2 pr-16 border border-purple-700 text-white bg-gray-900 rounded-full w-full'
        type='text'
        placeholder='Search...'
        onKeyDown={onSearchHandler}
        onChange={onChangeHandler}
        ref={inputRef}
      />
      <figure
        className='flex-center bg-purple-700 h-full px-3 lg:px-4 py-1 absolute right-0 bottom-0 rounded-r-full cursor-pointer'
        onClick={onClickHandler}
      >
        <SearchIcon />
      </figure>
    </div>
  );
};

export default InputSearch;
