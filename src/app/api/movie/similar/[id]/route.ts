import { tmdb } from "@/services/tmdb/tmdb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: number } },
) {
  const { id } = params;

  // Extract the 'page' query parameter from the request URL, default to page 1
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || 1;

  // Call the TMDB API with the id and page parameter
  const results = await tmdb.movies.similar(id, {
    page: +page,
  });

  // Format the results
  const filteredResults = results.results.map((item) => {
    return {
      id: item.id,
      title: item.title,
      releaseDate: item.release_date,
      image: item.poster_path,
      mediaType: "movie",
    };
  });

  const response = {
    results: filteredResults,
    nextPage: results.page < results.total_pages ? results.page + 1 : null,
  };

  return NextResponse.json(response, { status: 200 });
}
