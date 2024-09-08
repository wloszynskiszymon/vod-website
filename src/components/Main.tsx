import ErrorIcon from './UI/Icons/ErrorIcon';
import { PulseLoader } from 'react-spinners';
import { ErrorBoundary } from 'react-error-boundary';

import { MAIN_LINKS } from '../utilities/StaticData';
import useMediaImages from '../hooks/useMediaImages';

import MainCarousel from './Carousel/MainCarousel';
// import uniqid from 'uniqid';

const Main = () => {
  // const { data, isSuccess, isLoading, isError } = useMediaImages(MAIN_LINKS);

  // if (isLoading) {
  //   return (
  //     <main className='flex-center py-28 bg-gradient-to-r from-neutral-900  via-[rgb(31,41,55)] to-neutral-900'>
  //       <PulseLoader color={'Silver'} size={20} />
  //     </main>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <main className='py-28 bg-gradient-to-r from-neutral-900  via-[rgb(31,41,55)] to-neutral-900'>
  //       {/* <ErrorBoundary>
  //         <div className='text-gray-300 text-center font-extrabold text-xl flex-center'>
  //           <ErrorIcon />
  //           <p className='ml-2'>Something went wrong...</p>
  //         </div>
  //       </ErrorBoundary> */}
  //     </main>
  //   );
  // }

  return (
    <main className='pt-8 pb-16 bg-gradient-to-r from-neutral-900  via-[rgb(31,41,55)] to-neutral-900'>
      {/* {isSuccess &&
        data.map(({ data: mediaData, title }) => (
          <MainCarousel key={'uniqid()'} data={mediaData} title={title} />
        ))} */}
    </main>
  );
};

export default Main;
