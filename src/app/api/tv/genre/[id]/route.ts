import { tmdb } from "@/services/tmdb/tmdb";
import { NextResponse } from "next/server";

type PageParams = {
  params: {
    id: number;
  };
};

export async function GET(request: Request, { params }: PageParams) {
  const { id } = params;

  // Extract the 'page' and 'genre' query parameters from the request URL, default to page 1
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || 1;

  // Call the TMDB API with the id, page, and genre parameter
  const results = await tmdb.discover.tvShow({
    page: Number(page),
    with_genres: id + "",
  });

  // Format the results
  const filteredResults = results.results.map((item) => {
    return {
      id: item.id,
      title: item.name,
      releaseDate: item.first_air_date,
      image: item.poster_path,
      mediaType: "tv",
    };
  });

  const response = {
    results: filteredResults,
    nextPage: results.page < results.total_pages ? results.page + 1 : null,
  };

  return NextResponse.json(response, { status: 200 });
}
