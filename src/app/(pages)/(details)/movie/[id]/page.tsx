import MovieTabs from "@/components/tabs/MovieTabs";
import { tmdb } from "@/services/tmdb/tmdb";
import DetailsBackground from "../../_components/DetailsBackground";
import DetailsCard from "../../_components/DetailsCard";
import DetailsPoster from "../../_components/DetailsPoster";

type PageParams = {
  params: {
    id: number;
  };
};

const MovieDetailsPage = async ({ params }: PageParams) => {
  const { id } = params;
  const movieDetails = await tmdb.movies.details(id);

  return (
    <DetailsBackground>
      <DetailsCard>
        <DetailsPoster src={movieDetails.poster_path as string} />
        <MovieTabs
          className="flex h-full min-h-0 w-full flex-1 flex-col gap-4 self-start md:w-auto"
          {...movieDetails}
        />
      </DetailsCard>
    </DetailsBackground>
  );
};

export default MovieDetailsPage;
