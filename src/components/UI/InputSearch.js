import { useRef, useState } from 'react';
import axios from 'axios';
import SearchIcon from './SearchIcon';
import MovieTilesRow from './MovieTilesRow';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const InputSearch = () => {
  const [data, setData] = useState(null);
  const inputRef = useRef(null);

  const search = (query) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then((res) => {
        const filteredData = res.data.results.filter(
          (result) => !result.backdropPath && result.backdrop_path
        );
        setData(filteredData.slice(0, 3));
      })
      .catch((err) => console.error(err.message));
  };

  const onSearchHandler = (e) => {
    if (e.key === 'Enter' && e.target.value.length !== 0) {
      const query = e.target.value;
      search(query);
    }
  };

  const onClickHandler = () => {
    const query = inputRef.current.value;
    if (query.length === 0) return;
    search(query);
  };

  const onChangeHandler = () => {
    const query = inputRef.current.value;
    if (query.length === 0) {
      setData(null);
      return;
    }
    search(query);
  };

  return (
    <div className='relative flex items-center flex-col w-full h-3/5 lg:h-1/2'>
      <div className='relative w-3/5 lg:w-2/5 flex justify-center items-center mt-3 md:mt-5 lg:mt-10'>
        <input
          className='px-4 py-2 pr-16 border border-purple-700 text-white bg-gray-900 rounded-full w-full'
          type='text'
          placeholder='Search...'
          onKeyDown={onSearchHandler}
          onChange={onChangeHandler}
          ref={inputRef}
        />
        <figure
          className='flex justify-center items-center bg-purple-700 h-full px-3 lg:px-4 py-1 absolute right-0 bottom-0 rounded-r-full cursor-pointer'
          onClick={onClickHandler}
        >
          <SearchIcon />
        </figure>
      </div>
      {data && (
        <div className='w-screen pb-5 absolute bottom-0 md:w-4/5 '>
          <MovieTilesRow data={data} />
        </div>
      )}
    </div>
  );
};

export default InputSearch;
