import axios from "axios";
import { sliderLinks } from "./utils/urls";

// Fetch slider data with good image quality
export async function GET() {
  // Fetch data from external API
  const promises = sliderLinks.map(({ promise }) => promise);
  const results = await axios.all(promises);

  return Response.json(results, { status: 200 });
}
