import TMDBImage from "@/assets/TMDBImage";
import Card from "@/components/details/Card";
import MovieTabs from "@/components/TabBox/MovieTabs";
import { tmdb } from "@/services/tmdb/tmdb";

type PageParams = {
  params: {
    id: number;
  };
};

const MovieDetails = async ({ params }: PageParams) => {
  const { id } = params;
  const movieDetails = await tmdb.movies.details(id);

  return (
    <section className="flex-center relative h-screen min-h-[30rem] w-full lg:bg-gray-900">
      <Card className="z-10 flex h-[540px] w-5/6 gap-4 overflow-hidden bg-gray-950">
        <figure className="self-center">
          <TMDBImage
            className="rounded-xl border-2 border-gray-700"
            imageType="poster"
            size="w342"
            src={movieDetails.poster_path as string}
            alt="Poster"
            priority
          />
        </figure>
        <MovieTabs {...movieDetails} />
      </Card>
    </section>
  );
};

export default MovieDetails;
