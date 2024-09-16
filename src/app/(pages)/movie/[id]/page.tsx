import TMDBImage from "@/assets/TMDBImage";
import Card from "@/components/details/Card";
import DetailsHeader from "@/components/details/DetailsHeader";
import { tmdb } from "@/services/tmdb/tmdb";

type PageParams = {
  params: {
    id: number;
  };
};

const MovieDetails = async ({ params }: PageParams) => {
  const { id } = params;
  const { poster_path, title, vote_average, release_date, runtime, tagline } =
    await tmdb.movies.details(id);

  // Release year for movies
  // First air date for tv series
  const year = new Date(release_date).getFullYear();

  // Movie runtime for movies
  // Amount of seasons for tv series

  return (
    <section className="flex-center relative h-[50rem] w-full pt-8 md:pt-12 lg:bg-gray-900">
      <Card className="z-10 grid w-5/6 grid-cols-3 grid-rows-6 bg-gray-950">
        <TMDBImage
          className="row-span-full rounded-xl border-2 border-gray-700"
          imageType="poster"
          size="w500"
          src={poster_path as string}
          alt="Poster"
        />
        <DetailsHeader
          className="col-span-2 row-span-2 mt-4"
          title={title}
          rating={vote_average}
          description={tagline}
          runtime={runtime + " min"}
          releaseYear={year}
        />
      </Card>
    </section>
  );
};

export default MovieDetails;
