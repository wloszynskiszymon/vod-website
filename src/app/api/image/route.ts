import axios from "axios";
import { sliderMoviesLinks, sliderTVsLink } from "./utils/urls";

// Fetch slider data with good image quality
export async function GET() {
  // Fetch data from external API
  const moviesPromises = sliderMoviesLinks.map(({ fn }) => fn);
  const TVsPromises = sliderTVsLink.map(({ fn }) => fn);
  const results = await axios.all([moviesPromises, TVsPromises]);

  return Response.json(results, { status: 200 });
}
