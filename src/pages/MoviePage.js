import { useEffect, useState, useCallback } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import { PulseLoader } from 'react-spinners';

import { useParams } from 'react-router-dom';

import StarIcon from '../components/UI/StarIcon';

import TabBox from '../components/TabBox/TabBox';

import { formatTime } from '../utilities/UtilitiesFunctions';

import axios from 'axios';

import { API_KEY } from '../hooks/useMedia';

import TabMediaTiles from '../components/TabBox/TabBoxTabs/TabMediaTiles';
import TabDetails from '../components/TabBox/TabBoxTabs/TabDetails';

const initalState = {
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

  const [mediaDetails, setMediaDetails] = useState(initalState);

  const fetchMediaDetails = useCallback(async () => {
    try {
      setMediaDetails((prevDetails) => ({
        ...prevDetails,
        status: 'loading', // Set status to loading
      }));

      // Getting movie detials
      const mainMovieLink = `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${API_KEY}`;
      const similarQueryLink = `https://api.themoviedb.org/3/${media_type}/${id}/similar?api_key=${API_KEY}`;

      const [mainMovieResponse, similarResponse] = await axios.all([
        axios.get(mainMovieLink),
        axios.get(similarQueryLink),
      ]);

      const mainMovieData = mainMovieResponse.data;
      const similarMovies = similarResponse.data.results;

      const belongs_to_collection = mainMovieData.belongs_to_collection
        ? true
        : false;

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
          mainMovieData.release_date
            ? mainMovieData.release_date
            : mainMovieData.first_air_date
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
          mainMovieData.belongs_to_collection
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

      setMediaDetails({
        status: 'succeeded',
        data: mainMovieData,
        formattedData: formattedData,
        similarMovies: similarMovies,
        collection: collectionResponse?.data || null,
      });
    } catch (error) {
      console.error('Error fetching media:', error);
      setMediaDetails((prevDetails) => ({
        ...prevDetails,
        status: 'failed', // Update status in case of an error
      }));
    }
  }, [media_type, id]);

  useEffect(() => {
    mediaDetails.status === 'idle' && fetchMediaDetails();

    return () => {
      setMediaDetails(initalState);
    };
  }, [media_type, id, mediaDetails.status, fetchMediaDetails]);

  return (
    <div className='overflow-hidden relative '>
      <NavBar />
      <header className='relative flex flex-center w-full h-[50rem] bg-blue-950'>
        <div
          className={`w-3/4 h-5/6 mt-10 z-10 relative bg-gray-900 flex rounded-2xl shadow-2xl`}
        >
          {mediaDetails.status === 'succeeded' && (
            <>
              <img
                src={mediaDetails.formattedData.posterPath}
                className='h-full p-4'
                alt='poster'
              />
              <section className='w-full h-full px-4'>
                <div className=' text-3xl w-full h-1/6 font-bold flex justify-between items-center uppercase'>
                  <h1 className='text-fuchsia-200'>
                    {mediaDetails.data?.title || mediaDetails.data?.name}
                  </h1>
                  <aside className='flex justify-center items-center'>
                    <p className='text-white'>
                      {mediaDetails.data?.vote_average &&
                        parseFloat(mediaDetails.data?.vote_average.toFixed(1))}
                    </p>
                    <figure className='w-12 h-12 scale-[70%]'>
                      <StarIcon />
                    </figure>
                  </aside>
                </div>
                <div className='flex w-full text-gray-400 -translate-y-6 text-lg'>
                  <p>
                    {mediaDetails.formattedData?.year} |{' '}
                    {mediaDetails.data.runtime
                      ? formatTime(mediaDetails.data?.runtime)
                      : `${mediaDetails.data.number_of_seasons} season${
                          mediaDetails.data.number_of_seasons > 1 ? 's' : ''
                        }`}
                  </p>
                </div>
                <article className='text-gray-400 -translate-y-2'>
                  {mediaDetails.data?.tagline}
                </article>
                {mediaDetails.formattedData.tabsData.length > 0 && (
                  <TabBox tabs={mediaDetails.formattedData?.tabsData} />
                )}
              </section>
            </>
          )}
          {mediaDetails.status === 'loading' && (
            <div className='w-full h-full flex justify-center items-center'>
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
