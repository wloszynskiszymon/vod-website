import { FixMeLater } from '../types/types';

export const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const useURL = (base: FixMeLater, queryParams?: FixMeLater) => {
  const baseURL = `https://api.themoviedb.org/3/${base}`;

  const modified = { api_key: API_KEY, ...queryParams };
  function createURL(queryParams: FixMeLater) {
    const queryString = Object.keys(queryParams)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`
      )
      .join('&');

    if (queryString.length > 0) {
      return `${baseURL}?${queryString}`;
    } else {
      return baseURL;
    }
  }

  return createURL(modified);
};

export default useURL;
