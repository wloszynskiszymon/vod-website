import MovieTile from '../components/MovieTiles/MovieTile';

export const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hoursString = hours > 0 ? `${hours}h ` : '';
  const minutesString = remainingMinutes > 0 ? `${remainingMinutes}min` : '';

  return hoursString + minutesString;
};

export const formatObjectData = (objArray, objProp) => {
  if (!objArray || !Array.isArray(objArray)) {
    return '';
  }

  const dataStringArray = objArray.map((obj) => obj[objProp]);
  return dataStringArray.join(' | ');
};

export const renderMovieTiles = (mediaData, mediaType) => {
  const movieTiles = [];

  mediaData.forEach((media) => {
    if (media.backdrop_path) {
      movieTiles.push(
        <div key={`collection-${media.id}`}>
          <MovieTile
            backdrop_path={media.backdrop_path}
            media_type={media.media_type || mediaType}
            id={media.id}
            title={media?.title || media?.name}
            date={media?.first_air_date || media?.release_date}
          />
        </div>
      );
    }
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
