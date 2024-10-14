import { tmdb } from "./tmdb";

// Fetch random image from the discover section in order to display it in the header
export const fetchRandomImage = async () => {
  try {
    // Fetch image data
    const { results } = await tmdb.discover.movie({
      sort_by: "popularity.desc",
      region: "US",
      language: "en-US",
      page: 1,
    });

    // If there is no image data, return null
    if (results.length === 0) return null;

    // Get random image - bad and good quality
    const i = Math.floor(Math.random() * results.length);

    const image = results[i]
      ? `https://image.tmdb.org/t/p/w1280${results[i].backdrop_path}`
      : null;

    return image;
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
};
