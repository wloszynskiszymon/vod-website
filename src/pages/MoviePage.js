import React, { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import StarIcon from '../components/UI/Icons/StarIcon';
import TabBox from '../components/TabBox/TabBox';
import TabMediaTiles from '../components/TabBox/TabBoxTabs/TabMediaTiles';
import TabDetails from '../components/TabBox/TabBoxTabs/TabDetails';

import { formatTime } from '../utilities/UtilitiesFunctions';
import { API_KEY } from '../utilities/constants';

const initialState = {
  status: 'idle',
  data: null,
  similarMovies: [],
  collection: null,
  formattedData: {
    ready: false,
    posterPath: null,
    year: null,
    tabsData: [],
    belongs_to_collection: false,
  },
};

const MoviePage = () => {
  const { media_type, id } = useParams();

  const [mediaDetails, setMediaDetails] = useState(initialState);

  useEffect(() => {
    const fetchMediaDetails = async () => {
      try {
        const mainMovieLink = `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${API_KEY}`;
        const similarQueryLink = `https://api.themoviedb.org/3/${media_type}/${id}/similar?api_key=${API_KEY}`;

        const [mainMovieResponse, similarResponse] = await axios.all([
          axios.get(mainMovieLink),
          axios.get(similarQueryLink),
        ]);

        const mainMovieData = mainMovieResponse.data;
        const similarMovies = similarResponse.data.results;

        const belongs_to_collection = !!mainMovieData.belongs_to_collection;

        let collectionResponse = null;
        if (belongs_to_collection) {
          const collectionId = mainMovieData.belongs_to_collection?.id;
          if (collectionId) {
            const collectionQuery = `https://api.themoviedb.org/3/collection/${collectionId}?api_key=${API_KEY}`;
            collectionResponse = await axios.get(collectionQuery);
          }
        }

        const formattedData = {
          posterPath: `https://image.tmdb.org/t/p/original/${mainMovieData.poster_path}`,
          year: new Date(
            mainMovieData.release_date || mainMovieData.first_air_date
          ).getFullYear(),
          tabsData: [
            {
              name: 'details',
              label: 'details',
              content: <TabDetails data={mainMovieData} />,
            },
            {
              name: 'similar',
              label: 'similar',
              content: (
                <TabMediaTiles data={{ media_type, data: similarMovies }} />
              ),
            },
            belongs_to_collection
              ? {
                  name: 'belongs_to_collection',
                  label: 'Collection',
                  content: (
                    <TabMediaTiles
                      data={{ media_type, data: collectionResponse.data.parts }}
                    />
                  ),
                }
              : [],
          ],
          ready: false,
        };

        setMediaDetails((prevMediaDetails) => ({
          ...prevMediaDetails,
          data: mainMovieData,
          formattedData: formattedData,
          similarMovies: similarMovies,
          collection: collectionResponse?.data || null,
          status: 'succeeded',
        }));
      } catch (error) {
        console.error('Error fetching media:', error);
        setMediaDetails((prevMediaDetails) => ({
          ...prevMediaDetails,
          status: 'failed',
        }));
      }
    };

    if (!initialState.data) {
      setMediaDetails((prevMediaDetails) => ({
        ...prevMediaDetails,
        status: 'loading',
      }));

      fetchMediaDetails();
    }

    return () => {
      setMediaDetails(initialState);
    };
  }, [media_type, id]);

  return (
    <div className='overflow-hidden relative '>
      <NavBar />
      <header className='relative flex flex-center w-full md:h-[50rem] h-[45rem] bg-blue-950'>
        <div
          className={`w-full h-full lg:w-3/4 lg:h-5/6 z-10 relative md:my-12 bg-gray-900 grid grid-cols-3 grid-rows-6 lg:rounded-2xl md:shadow-2xl`}
        >
          {mediaDetails.status === 'succeeded' && (
            <>
              <div className='w-full h-full md:row-span-full row-span-2 col-span-1 flex justify-center align-center'>
                <img
                  src={mediaDetails.formattedData.posterPath}
                  className='h-full p-4 pt-16 md:pt-4'
                  alt='poster'
                />
              </div>

              <section className='w-full px-1 md:px-4 row-span-2 col-span-2'>
                <div className=' w-full font-bold flex justify-between items-start uppercase pt-20 md:pt-8'>
                  <h1 className='text-fuchsia-200 text-md md:text-3xl'>
                    {mediaDetails.data?.title || mediaDetails.data?.name}
                  </h1>
                  <aside className='flex justify-center items-center'>
                    <p className='text-white text-md md:text-3xl translate-x-2 md:translate-x-0'>
                      {mediaDetails.data?.vote_average &&
                        parseFloat(mediaDetails.data?.vote_average.toFixed(1))}
                    </p>
                    <figure className='w-12 h-12 scale-[40%] md:scale-[70%]'>
                      <StarIcon />
                    </figure>
                  </aside>
                </div>
                <div className='flex w-full text-gray-400 text-sm md:text-md '>
                  <p>
                    {mediaDetails.formattedData?.year} |{' '}
                    {mediaDetails.data?.runtime
                      ? formatTime(mediaDetails.data?.runtime)
                      : `${mediaDetails.data?.number_of_seasons} season${
                          mediaDetails.data?.number_of_seasons > 1 ? 's' : ''
                        }`}
                  </p>
                </div>
                <article className='text-gray-400 mt-2 text-sm md:text-md'>
                  {mediaDetails.data?.tagline}
                </article>
              </section>
              <div className='md:col-span-2 row-span-5 col-span-full px-4 mt-6 md:-translate-y-20'>
                {mediaDetails.formattedData.tabsData.length > 0 && (
                  <TabBox tabs={mediaDetails.formattedData?.tabsData} />
                )}
              </div>
            </>
          )}
          {mediaDetails.status === 'loading' && (
            <div className='col-span-full row-span-full w-full h-full flex justify-center items-center'>
              <PulseLoader color={'Silver'} size={20} />
            </div>
          )}
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default MoviePage;
