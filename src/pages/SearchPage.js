import NavBar from '../components/NavBar';
import DeleteIcon from '../components/UI/Icons/DeleteIcon';
import { useRef, useState, useEffect } from 'react';

import { API_KEY } from '../utilities/constants';

import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { renderMovieTiles } from '../utilities/UtilitiesFunctions';

import { debounce } from '../utilities/UtilitiesFunctions';

import { PulseLoader } from 'react-spinners';

const SearchPage = () => {
  const navigate = useNavigate();
  const inputRef = useRef('');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const q = searchParams.get('q');

  const [inputValue, setInputValue] = useState(q || '');
  const [results, setResults] = useState([]);
  // For displaying status.
  const [status, setStatus] = useState('idle');

  const fetchData = async (query) => {
    if (query.length > 0) {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`
        );
        setResults(res.data.results);
        setStatus('succeeded');
      } catch (error) {
        console.error('Error:', error);
        setResults('error');
      }
    } else {
      setResults([]);
      setResults('error');
    }
  };

  const onSearchHandler = (e) => {
    if (e.key === 'Enter' && e.target.value.length !== 0) {
      setStatus('loading');
      setInputValue(e.target.value);
    }
  };

  const onChangeHandler = (e) => {
    const query = e.target.value;
    if (query.length === 0) {
      navigate('/');
      return;
    }
    setStatus('loading');
    setInputValue(query);
  };

  const onClickHandler = () => navigate(-1);

  useEffect(() => {
    const debouncedFetchData = debounce(fetchData, 200);
    debouncedFetchData(inputValue);
  }, [inputValue]);

  const resultsMarkup =
    results.length > 0 &&
    status === 'succeeded' &&
    renderMovieTiles(results, null);

  const notFoundMarkup = status === 'succeeded' && (
    <p className='text-gray-300 text-1xl text-center col-span-full'>
      No results found.
    </p>
  );

  const loadingMarkup = (
    <div className='col-span-full justify-self-center'>
      <PulseLoader color={'Silver'} size={20} />
    </div>
  );

  return (
    <>
      <NavBar />
      <div className='w-full h-1/5 bg-blue-950 transform translate-y-20 flex flex-center px-6'>
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

      <div className='w-full h-4/5 translate-y-28'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg-grid-cols-4 xl:grid-cols-6 gap-4 w-full h-full overflow-y-auto p-6'>
          {results.length > 0 && status === 'succeeded' && resultsMarkup}
          {results.length === 0 && status === 'succeeded' && notFoundMarkup}
          {status === 'loading' && loadingMarkup}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
