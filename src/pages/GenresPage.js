import { useQuery } from '@tanstack/react-query';
import useURL from '../hooks/useURL';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import {
  handleInfiniteScroll,
  renderMovieTiles,
} from '../utilities/UtilitiesFunctions';
import Footer from '../components/Footer';
import { PulseLoader } from 'react-spinners';
import { useLocation, useNavigate } from 'react-router-dom';

const queryGenres = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

const GenresPage = ({ mediaType }) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [currentGenre, setCurrentGenre] = useState(null);
  const scrollContainerRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const genreListURL = useURL(`genre/${mediaType}/list`);

  // When changing route reset the currentGenre to initial state
  useEffect(() => {
    setCurrentGenre(null);
  }, [location.pathname]);

  // Fetch for genres list
  const {
    data: genreListData,
    isSuccess: genreListIsSuccess,
    isError: genreListIsError,
  } = useQuery({
    queryKey: [`${mediaType}-genres`],
    queryFn: () => queryGenres(genreListURL),
    staleTime: Infinity,
    onSuccess: () => resetDataAndHook(),
  });

  // After fetching for genres list fetch for data with specific genre type
  const {
    data: genreData,
    isFinalSuccess: genreIsSuccess,
    isLoading: genreIsLoading,
    isError: genreIsError,
    resetDataAndHook,
    isFetchingNextPage: genreIsFetchingNextPage,
    hasNextPage: genreHasNextPage,
    fetchNextPage: genreFetchNextPage,
  } = useInfiniteScroll(
    `/discover/${mediaType}`,
    { with_genres: currentGenre?.id },
    mediaType,
    !!currentGenre && genreListIsSuccess
  );

  // Open dropdown
  const onClickDropdownHandler = () =>
    setDropdownActive((prevState) => !prevState);

  // Set new genre, close dropdown and reset data to refetch it.
  const onClickGenre = (e) => {
    setCurrentGenre({
      id: e.target.id,
      name: e.target.textContent,
    });
    setDropdownActive(false);
    resetDataAndHook();
  };

  // When you fetch for genres list set the first item as default
  useEffect(() => {
    genreListIsSuccess && setCurrentGenre(genreListData?.genres[0]);
  }, [genreListIsSuccess, genreListData?.genres]);

  // Handle any errors
  useEffect(() => {
    genreListIsError && navigate('/error');
    genreIsError && navigate('/error');
  }, [genreIsError, genreListIsError, navigate]);

  return (
    <div className='overflow-hidden w-screen h-screen'>
      <section
        className='px-4 h-full overflow-y-auto '
        ref={scrollContainerRef}
        onScroll={() =>
          handleInfiniteScroll(
            scrollContainerRef,
            genreIsFetchingNextPage,
            genreHasNextPage,
            genreFetchNextPage
          )
        }
      >
        <div className='w-full fixed bg-gray-950 pb-6 flex items-center gap-2 md:gap-4 z-10 pt-20 lg:pt-32'>
          <h1 className='text-md md:text-xl lg:text-3xl font-extrabold text-gray-300 tracking-wider uppercase'>
            Find desired{' '}
            <span className='text-purple-400'>
              {mediaType === 'movie' ? 'movies' : 'series'}
            </span>
          </h1>
          <div className='relative block'>
            <div
              onClick={onClickDropdownHandler}
              className='text-xs md:text-md lg:text-lg border-2 border-gray-300 rounded-lg bg-gray-900 px-2 py-1 text-gray-300 cursor-pointer'
            >
              {currentGenre ? (
                currentGenre.name
              ) : (
                <PulseLoader color={'Silver'} size={8} />
              )}
              {currentGenre && <span className='ml-2'> &#8744;</span>}
            </div>
            {dropdownActive && (
              <div className='block absolute bg-gray-900 w-[15rem] lg:w-[20rem] z-20 rounded-xl px-4 py-2 right-0'>
                <ul className='flex flex-wrap gap-2 text-gray-300 text-sm md:text-md lg:text-lg'>
                  {genreListIsSuccess &&
                    genreListData.genres.map((singleData) => {
                      const { id, name } = singleData;
                      return (
                        <li
                          className='cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-100'
                          id={id}
                          key={id}
                          onClick={onClickGenre}
                        >
                          {name}
                        </li>
                      );
                    })}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg-grid-cols-4 xl:grid-cols-6 gap-4 w-full min-h-[10rem] p-2 md:p-4 mt-36 md:mt-52'>
          {genreIsSuccess && renderMovieTiles(genreData)}
          {genreIsLoading && (
            <div className='col-span-full justify-self-center'>
              <PulseLoader color={'Silver'} size={16} />
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GenresPage;
