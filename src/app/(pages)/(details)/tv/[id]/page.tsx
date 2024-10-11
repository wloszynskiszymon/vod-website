import TvShowTabs from "@/components/tabs/TvShowTabs";
import { tmdb } from "@/services/tmdb/tmdb";
import DetailsBackground from "../../_components/DetailsBackground";
import DetailsCard from "../../_components/DetailsCard";
import DetailsPoster from "../../_components/DetailsPoster";

type PageParams = {
  params: {
    id: number;
  };
};

const TvShowDetailsPage = async ({ params }: PageParams) => {
  const { id } = params;
  const tvDetails = await tmdb.tvShows.details(id);

  return (
    <DetailsBackground>
      <DetailsCard>
        <DetailsPoster src={tvDetails.poster_path as string} />
        <TvShowTabs
          className="flex h-full min-h-0 w-full flex-1 flex-col gap-4 self-start md:w-auto"
          {...tvDetails}
        />
      </DetailsCard>
    </DetailsBackground>
  );
};

export default TvShowDetailsPage;
