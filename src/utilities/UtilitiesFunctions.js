import MovieTile from '../components/MovieTile';
import axios from 'axios';
import { API_KEY } from '../hooks/useURL';

// Array of images
export const fetchBetterImages = async (data, mediaType = null) => {
  const filteredRes = data.filter((data) => data.backdrop_path);

  const filteredData = filteredRes.map((data) => {
    return {
      ...data,
      media_type: data.media_type ? data.media_type : mediaType,
    };
  });

  const axiosRequests = filteredData.map((singleData) => {
    if (singleData.backdrop_path) {
      const imagesUrl = `https://api.themoviedb.org/3/${
        singleData.media_type ? singleData.media_type : mediaType
      }/${singleData.id}/images?api_key=${API_KEY}`;
      return axios.get(imagesUrl);
    }
    return null;
  });

  const axiosResponses = await axios.all(axiosRequests);

  const responsesWithBackdrop = axiosResponses.filter(
    (res) => res.data.backdrops.length > 0
  );

  // Map through the responses to get backdrop images
  const imagesLinks = responsesWithBackdrop.map((imagesData) => {
    let backdrops = imagesData.data.backdrops.find(
      (backdrop) => backdrop.iso_639_1 === 'en' || null
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
export const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hoursString = hours > 0 ? `${hours}h ` : '';
  const minutesString = remainingMinutes > 0 ? `${remainingMinutes}min` : '';

  return hoursString + minutesString;
};

export function checkIsNew(dateString) {
  const date = new Date(dateString);
  const diffInMillis = Date.now() - date.getTime();
  const months = diffInMillis / (1000 * 60 * 60 * 24 * 30);
  return months <= 3;
}

export const formatObjectData = (objArray, objProp) => {
  if (!objArray || !Array.isArray(objArray)) {
    return '';
  }

  const dataStringArray = objArray.map((obj) => obj[objProp]);
  return dataStringArray.join(' | ');
};

export const renderMovieTiles = (mediaData) => {
  const movieTiles = [];

  mediaData.forEach((singleData) => {
    movieTiles.push(
      <div
        className='w-full h-full'
        key={`collection-${singleData.id + Math.random()}`}
      >
        <MovieTile data={singleData} />
      </div>
    );
  });
  return movieTiles;
};

export const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

// Handle scroll for infinite Scroll
export const handleInfiniteScroll = (
  scrollContainerRef,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage
) => {
  const container = scrollContainerRef.current;
  if (
    container &&
    container.scrollTop + container.clientHeight >= container.scrollHeight
  ) {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }
};
