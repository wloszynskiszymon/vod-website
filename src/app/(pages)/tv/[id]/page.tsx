import TMDBImage from "@/assets/TMDBImage";
import Card from "@/components/details/Card";
import TvShowTabs from "@/components/TabBox/TvShowTabs";
import { tmdb } from "@/services/tmdb/tmdb";

type PageParams = {
  params: {
    id: number;
  };
};

const TvShowDetailsPage = async ({ params }: PageParams) => {
  const { id } = params;
  const tvDetails = await tmdb.tvShows.details(id);

  return (
    <section className="flex-center relative h-screen min-h-[30rem] w-full lg:bg-gray-900">
      <Card className="z-10 flex h-[540px] w-5/6 gap-4 overflow-hidden bg-gray-950">
        <figure className="h-full self-center">
          <TMDBImage
            className="h-full rounded-xl border-2 border-gray-700"
            imageType="poster"
            size="w342"
            src={tvDetails.poster_path as string}
            alt="Poster"
            priority
          />
        </figure>
        <TvShowTabs {...tvDetails} />
      </Card>
    </section>
  );
};

export default TvShowDetailsPage;
