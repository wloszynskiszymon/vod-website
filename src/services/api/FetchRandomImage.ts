import axios from "axios";
import { API_KEY } from "../../hooks/useURL";

// Fetch random image from the discover section in order to display it in the header
export const fetchRandomImage = async () => {
  try {
    // Fetch image data
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_media_type=movie&region=pl`;
    const res = await axios.get(url);
    const imageData = res.data.results;

    // If there is no image data, return null
    if (imageData.length === 0) return { small: null, original: null };

    // Get random image - bad and good quality
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
