'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY } from './useURL';
import { FixMeLater } from '../types/types';

const API_URL_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_media_type=movie&region=pl`;

const fetchRandomImage = async () => {
  const res = await axios.get(API_URL_MOVIES);
  const imageData = res.data.results;
  const index = Math.floor(Math.random() * imageData.length);
  const image = imageData[index]
    ? `https://image.tmdb.org/t/p/original/${imageData[index].backdrop_path}`
    : null;
  return image;
};

const useRandomImage = () => {
  return useQuery<FixMeLater>({
    queryKey: ['header'],
    queryFn: fetchRandomImage,
    staleTime: Infinity,
  });
};

export default useRandomImage;
