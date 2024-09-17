import axios from "axios";
import { PulseLoader } from "react-spinners";

import Footer from "../components/Footer";
import TabBox from "../components/TabBox/TabBox";
import StarIcon from "../components/UI/Icons/StarIcon";

import { fetchBetterImages, formatTime } from "../utilities/UtilitiesFunctions";

import { useQuery } from "@tanstack/react-query";

import { useEffect } from "react";
import TabDetails from "../components/details/TabDetails";
import TabCollection from "../components/TabBox/TabBoxTabs/TabCollection";
import TabSimilar from "../components/TabBox/TabBoxTabs/TabSimilar";
import { FixMeLater } from "../types/types";

const fetchData = async (url: FixMeLater) => {
  const data = await axios.get(url);
  return data.data;
};

const fetchCollection = async (url: FixMeLater, mediaType: FixMeLater) => {
  const data = await fetchData(url);
  const dataWithImages = await fetchBetterImages(data.parts);
  const finalData = dataWithImages.map((singleData) => {
    return { mediaType, ...singleData };
  });
  return finalData;
};

const DetailsPage = () => {
  const { mediaType, id } = useParams();
  const navigate = useNavigate();

  const mediaURL = useURL(`${mediaType}/${id}`);

  const {
    data: mediaData,
    isSuccess: mediaIsSuccess,
    isError: mediaIsError,
  } = useQuery({
    queryKey: [`media-${mediaType}-${id}`],
    queryFn: () => fetchData(mediaURL),

    staleTime: Infinity,
  });

  const collectionURL = useURL(
    `collection/${mediaData?.belongs_to_collection?.id}`,
  );

  const { data: collectionData, isSuccess: collectionIsSuccess } = useQuery({
    queryKey: [`collection-${mediaType}-${id}`],
    queryFn: () => fetchCollection(collectionURL, mediaType),
    staleTime: Infinity,
    enabled: !!mediaData?.belongs_to_collection,
  });

  // Release year for movies
  // First air date for tv series
  const year = new Date(
    mediaData?.release_date || mediaData?.first_air_date,
  ).getFullYear();

  // Movie runtime for movies
  // Amount of seasons for tv series
  const runtime = mediaData?.runtime
    ? formatTime(mediaData?.runtime)
    : `${mediaData?.number_of_seasons} season${
        mediaData?.number_of_seasons > 1 ? "s" : ""
      }`;

  const shouldRenderTabBox =
    mediaIsSuccess &&
    (!mediaData?.belongs_to_collection || collectionIsSuccess);

  useEffect(() => {
    mediaIsError && navigate("/error");
  }, [mediaIsError, navigate]);

  return (
    <>
      <header className="flex-center relative h-[50rem] max-h-[50rem] w-full bg-gray-900 pt-8 md:h-[35rem] md:pt-12 lg:h-[40rem] lg:max-h-full lg:bg-blue-950 xl:h-[50rem]">
        <div
          className={`relative z-10 grid h-full w-full grid-cols-3 grid-rows-6 bg-gray-900 md:my-12 md:shadow-2xl lg:h-5/6 lg:w-5/6 lg:rounded-2xl xl:w-3/4`}
        >
          {mediaIsSuccess && (
            <>
              <div className="flex-center col-span-1 row-span-2 mt-12 h-full w-full md:row-span-full lg:mt-0">
                <img
                  src={`https://image.tmdb.org/t/p/original/${mediaData.poster_path}`}
                  className="xs-details-img h-full min-w-[11rem] px-4 pb-4 md:max-h-[25rem] md:self-start lg:max-h-full lg:pt-4"
                  alt="poster"
                />
              </div>

              <section className="col-span-2 row-span-2 mt-8 w-full px-1 md:px-4 lg:mt-6">
                <div className="flex w-full items-center justify-between font-bold uppercase">
                  <h1 className="text-lg text-fuchsia-200 md:text-2xl lg:text-3xl">
                    {mediaData.title || mediaData.name}
                  </h1>
                  <aside className="flex-center">
                    <p className="translate-x-2 text-xl text-white md:translate-x-0 md:text-2xl lg:text-3xl">
                      {mediaData.vote_average &&
                        parseFloat(mediaData.vote_average.toFixed(1))}
                    </p>
                    <figure className="h-12 w-12 scale-[40%] md:scale-[70%]">
                      <StarIcon />
                    </figure>
                  </aside>
                </div>
                <div className="md:text-md flex w-full text-sm text-gray-400">
                  <p>{[year, runtime].join(" | ")}</p>
                </div>
                <article className="md:text-md mt-2 text-sm text-gray-400">
                  {mediaData?.tagline}
                </article>
              </section>
              <div className="xs-details-tabbox col-span-full row-span-5 mt-10 px-4 pb-20 md:col-span-2 md:mt-6 md:-translate-y-10 md:pb-12 lg:-translate-y-20 lg:pb-2 xl:pb-0">
                {shouldRenderTabBox && (
                  <TabBox initialActiveTab={"details"}>
                    <TabBox.ButtonContainer>
                      <TabBox.Button name={"details"}>Details</TabBox.Button>
                      <TabBox.Button name={"similar"}>Similar</TabBox.Button>
                      {collectionData && (
                        <TabBox.Button name={"collection"}>
                          Collection
                        </TabBox.Button>
                      )}
                    </TabBox.ButtonContainer>
                    <TabBox.Content>
                      <TabDetails data={mediaData} name={"details"} />
                      {collectionData && (
                        <TabCollection
                          data={collectionData}
                          name={"collection"}
                        />
                      )}
                      <TabSimilar
                        name={"similar"}
                        mediaType={mediaType}
                        id={id}
                      />
                    </TabBox.Content>
                  </TabBox>
                )}
              </div>
            </>
          )}
          {!shouldRenderTabBox && (
            <div className="col-span-full row-span-full flex h-full w-full items-center justify-center">
              <PulseLoader color={"Silver"} size={16} />
            </div>
          )}
        </div>
      </header>
      <Footer />
    </>
  );
};

export default DetailsPage;
