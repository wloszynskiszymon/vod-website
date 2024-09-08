import axios from "axios";
import { API_KEY } from "../../hooks/useURL";

export const fetchRandomImage = async () => {
  try {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_media_type=movie&region=pl`;
    const res = await axios.get(url);
    const imageData = res.data.results;

    if (imageData.length === 0) return { small: null, original: null };

    const index = Math.floor(Math.random() * imageData.length);
    const small = imageData[index]
      ? `https://image.tmdb.org/t/p/w300${imageData[index].backdrop_path}`
      : null;
    const original = imageData[index]
      ? `https://image.tmdb.org/t/p/original${imageData[index].backdrop_path}`
      : null;
    return { small, original };
  } catch (error) {
    console.error("Error fetching image:", error);
    return { small: null, original: null };
  }
};
