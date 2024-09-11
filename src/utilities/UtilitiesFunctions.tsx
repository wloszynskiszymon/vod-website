import axios from "axios";
import { FixMeLater } from "../types/types";

// Array of images
export const fetchBetterImages = async (data: FixMeLater, mediaType = null) => {
  const filteredRes = data.filter((data: FixMeLater) => data.backdrop_path);

  const filteredData = filteredRes.map((data: FixMeLater) => {
    return {
      ...data,
      media_type: data.media_type ? data.media_type : mediaType,
    };
  });

  const axiosRequests = filteredData.map((singleData: FixMeLater) => {
    if (singleData.backdrop_path) {
      const imagesUrl = `https://api.themoviedb.org/3/${
        singleData.media_type ? singleData.media_type : mediaType
      }/${singleData.id}/images?api_key=${""}`;
      return axios.get(imagesUrl);
    }
    return null;
  });

  const axiosResponses = await axios.all(axiosRequests);

  const responsesWithBackdrop = axiosResponses.filter(
    (res: FixMeLater) => res.data.backdrops.length > 0,
  );

  // Map through the responses to get backdrop images
  const imagesLinks = responsesWithBackdrop.map((imagesData: FixMeLater) => {
    let backdrops = imagesData?.data?.backdrops.find(
      (backdrop: FixMeLater) => backdrop.iso_639_1 === "en" || null,
    );

    // If not found english one, take just the first
    if (!backdrops) {
      backdrops = imagesData.data.backdrops[0];
    }

    // Get backdrop path depending on previous success
    const backdropPath = backdrops.file_path
      ? backdrops.file_path
      : imagesData.backdrop_path;

    const image = `https://image.tmdb.org/t/p/w300${backdropPath}`;

    return image;
  });

  // Add key 'image' to all the data
  const combinedData = imagesLinks.map((image, index) => {
    const singleData = filteredData[index];
    return {
      image,
      ...singleData,
    };
  });

  return combinedData;
};

// If movie is released for at least 3 months, return true
export const formatTime = (minutes: FixMeLater) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hoursString = hours > 0 ? `${hours}h ` : "";
  const minutesString = remainingMinutes > 0 ? `${remainingMinutes}min` : "";

  return hoursString + minutesString;
};

export function checkIsNew(dateString: FixMeLater) {
  const date = new Date(dateString);
  const diffInMillis = Date.now() - date.getTime();
  const months = diffInMillis / (1000 * 60 * 60 * 24 * 30);
  return months <= 3;
}

export const formatObjectData = (objArray: FixMeLater, objProp: FixMeLater) => {
  if (!objArray || !Array.isArray(objArray)) {
    return "";
  }

  const dataStringArray = objArray.map((obj) => obj[objProp]);
  return dataStringArray.join(" | ");
};

// export const renderMovieTiles = (mediaData: FixMeLater) => {
//   const movieTiles: FixMeLater = [];

//   mediaData.forEach((singleData: FixMeLater) => {
//     movieTiles.push(
//       <div
//         className="h-full w-full"
//         key={`collection-${singleData.id + Math.random()}`}
//       >
//         <MovieTile data={singleData} />
//       </div>,
//     );
//   });
//   return movieTiles;
// };

// Handle scroll for infinite Scroll
export const handleInfiniteScroll = (
  scrollContainerRef: FixMeLater,
  isFetchingNextPage: FixMeLater,
  hasNextPage: FixMeLater,
  fetchNextPage: FixMeLater,
) => {
  if (isFetchingNextPage) return;
  const container = scrollContainerRef.current;
  if (
    container &&
    container.scrollTop + container.clientHeight >= container.scrollHeight - 150
  ) {
    if (hasNextPage) {
      fetchNextPage();
    }
  }
};
