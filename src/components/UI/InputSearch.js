import SearchIcon from './Icons/SearchIcon';
import { useNavigate } from 'react-router-dom';

const InputSearch = (props) => {
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const word = e.target.value;
    if (word.length > 0) {
      navigate(`/search?q=${word}`);
    }
  };

  return (
    <div
      className={`flex-center relative w-8/12 lg:w-2/5 2xl:w-1/4 mt-3 md:mt-5 lg:mt-10 mb-6 md:mb-10 2xl:mt-16 ${
        props.className ? props.className : ''
      }`}
    >
      <input
        className='px-4 py-2 pr-16 border border-purple-700 text-white bg-gray-900 rounded-full w-full'
        type='text'
        placeholder='Search...'
        onChange={onChangeHandler}
        autoFocus
      />
      <figure className='flex-center bg-purple-700 h-full px-3 lg:px-4 py-1 absolute right-0 bottom-0 rounded-r-full cursor-pointer'>
        <SearchIcon />
      </figure>
    </div>
  );
};

export default InputSearch;
