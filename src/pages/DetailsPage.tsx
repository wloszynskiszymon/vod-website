// import { PulseLoader } from 'react-spinners';
// import axios from 'axios';

// import Footer from '../components/Footer';
// import StarIcon from '../components/UI/Icons/StarIcon';
// import TabBox from '../components/TabBox/TabBox';

// import { fetchBetterImages, formatTime } from '../utilities/UtilitiesFunctions';

// import { useQuery } from '@tanstack/react-query';

// import TabCollection from '../components/TabBox/TabBoxTabs/TabCollection';
// import TabDetails from '../components/TabBox/TabBoxTabs/TabDetails';
// import TabSimilar from '../components/TabBox/TabBoxTabs/TabSimilar';
// import { useEffect } from 'react';
// import { FixMeLater } from '../types/types';

// const fetchData = async (url: FixMeLater) => {
//   const data = await axios.get(url);
//   return data.data;
// };

// const fetchCollection = async (url: FixMeLater, mediaType: FixMeLater) => {
//   const data = await fetchData(url);
//   const dataWithImages = await fetchBetterImages(data.parts);
//   const finalData = dataWithImages.map((singleData) => {
//     return { mediaType, ...singleData };
//   });
//   return finalData;
// };

// const DetailsPage = () => {
//   const { mediaType, id } = useParams();
//   const navigate = useNavigate();

//   const mediaURL = useURL(`${mediaType}/${id}`);

//   const {
//     data: mediaData,
//     isSuccess: mediaIsSuccess,
//     isError: mediaIsError,
//   } = useQuery({
//     queryKey: [`media-${mediaType}-${id}`],
//     queryFn: () => fetchData(mediaURL),

//     staleTime: Infinity,
//   });

//   const collectionURL = useURL(
//     `collection/${mediaData?.belongs_to_collection?.id}`
//   );

//   const { data: collectionData, isSuccess: collectionIsSuccess } = useQuery({
//     queryKey: [`collection-${mediaType}-${id}`],
//     queryFn: () => fetchCollection(collectionURL, mediaType),
//     staleTime: Infinity,
//     enabled: !!mediaData?.belongs_to_collection,
//   });

//   // Release year for movies
//   // First air date for tv series
//   const year = new Date(
//     mediaData?.release_date || mediaData?.first_air_date
//   ).getFullYear();

//   // Movie runtime for movies
//   // Amount of seasons for tv series
//   const runtime = mediaData?.runtime
//     ? formatTime(mediaData?.runtime)
//     : `${mediaData?.number_of_seasons} season${
//         mediaData?.number_of_seasons > 1 ? 's' : ''
//       }`;

//   const shouldRenderTabBox =
//     mediaIsSuccess &&
//     (!mediaData?.belongs_to_collection || collectionIsSuccess);

//   useEffect(() => {
//     mediaIsError && navigate('/error');
//   }, [mediaIsError, navigate]);

//   return (
//     <>
//       <header className='relative flex-center w-full pt-8 md:pt-12 h-[50rem] max-h-[50rem] md:h-[35rem] lg:h-[40rem] xl:h-[50rem] lg:max-h-full bg-gray-900 lg:bg-blue-950'>
//         <div
//           className={`w-full h-full lg:w-5/6 xl:w-3/4 lg:h-5/6 z-10 relative md:my-12 bg-gray-900 grid grid-cols-3 grid-rows-6 lg:rounded-2xl md:shadow-2xl`}
//         >
//           {mediaIsSuccess && (
//             <>
//               <div className='w-full h-full md:row-span-full row-span-2 col-span-1 flex-center mt-12 lg:mt-0'>
//                 <img
//                   src={`https://image.tmdb.org/t/p/original/${mediaData.poster_path}`}
//                   className='xs-details-img md:max-h-[25rem] h-full min-w-[11rem] lg:max-h-full md:self-start px-4 pb-4 lg:pt-4'
//                   alt='poster'
//                 />
//               </div>

//               <section className='w-full px-1 md:px-4 row-span-2 col-span-2 mt-8 lg:mt-6'>
//                 <div className='w-full font-bold flex justify-between items-center uppercase'>
//                   <h1 className='text-fuchsia-200 text-lg md:text-2xl lg:text-3xl'>
//                     {mediaData.title || mediaData.name}
//                   </h1>
//                   <aside className='flex-center'>
//                     <p className='text-white text-xl md:text-2xl lg:text-3xl translate-x-2 md:translate-x-0'>
//                       {mediaData.vote_average &&
//                         parseFloat(mediaData.vote_average.toFixed(1))}
//                     </p>
//                     <figure className='w-12 h-12 scale-[40%] md:scale-[70%]'>
//                       <StarIcon />
//                     </figure>
//                   </aside>
//                 </div>
//                 <div className='flex w-full text-gray-400 text-sm md:text-md '>
//                   <p>{[year, runtime].join(' | ')}</p>
//                 </div>
//                 <article className='text-gray-400 mt-2 text-sm md:text-md'>
//                   {mediaData?.tagline}
//                 </article>
//               </section>
//               <div className='xs-details-tabbox md:col-span-2 row-span-5 col-span-full px-4 pb-20 lg:pb-2 xl:pb-0 mt-10 md:mt-6 md:-translate-y-10 lg:-translate-y-20 md:pb-12'>
//                 {shouldRenderTabBox && (
//                   <TabBox initialActiveTab={'details'}>
//                     <TabBox.ButtonContainer>
//                       <TabBox.Button name={'details'}>Details</TabBox.Button>
//                       <TabBox.Button name={'similar'}>Similar</TabBox.Button>
//                       {collectionData && (
//                         <TabBox.Button name={'collection'}>
//                           Collection
//                         </TabBox.Button>
//                       )}
//                     </TabBox.ButtonContainer>
//                     <TabBox.Content>
//                       <TabDetails data={mediaData} name={'details'} />
//                       {collectionData && (
//                         <TabCollection
//                           data={collectionData}
//                           name={'collection'}
//                         />
//                       )}
//                       <TabSimilar
//                         name={'similar'}
//                         mediaType={mediaType}
//                         id={id}
//                       />
//                     </TabBox.Content>
//                   </TabBox>
//                 )}
//               </div>
//             </>
//           )}
//           {!shouldRenderTabBox && (
//             <div className='col-span-full row-span-full w-full h-full flex justify-center items-center'>
//               <PulseLoader color={'Silver'} size={16} />
//             </div>
//           )}
//         </div>
//       </header>
//       <Footer />
//     </>
//   );
// };

// export default DetailsPage;
