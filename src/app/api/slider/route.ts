import axios from "axios";
import { SliderLink, sliderLinks } from "./utils/urls";

// Fetch slider data with good image quality
export async function GET() {
  // Fetch data from external API
  const promises = sliderLinks.map(({ link }: SliderLink) => axios.get(link));
  const results = await axios.all(promises);

  // Make sure the length is equal
  if (sliderLinks.length !== results.length)
    return Response.json({ error: "Error fetching data" }, { status: 500 });

  // Combine the important data (both tv shows and movies)
  const sliderData = results.map((result, i) => {
    const show = result.data.results;
    // Ignore if there is no backdrop path
    return {
      title: sliderLinks[i].title,
      data: {
        id: show.id,
        title: show.title || show.name,
        releaseData: show.release_date || show.first_air_date,
        mediaType: show.release_date ? "movie" : "tv",
      },
    };
  });

  return Response.json(sliderData, { status: 200 });
}
