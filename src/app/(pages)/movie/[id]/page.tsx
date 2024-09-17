import TMDBImage from "@/assets/TMDBImage";
import Card from "@/components/details/Card";
import DetailsHeader from "@/components/details/DetailsHeader";
import TabDetails from "@/components/details/TabDetails";
import TabContent from "@/components/TabBox/TabContent";
import TabRoot from "@/components/TabBox/TabRoot";
import TabsButton from "@/components/TabBox/TabsButton";
import TabsList from "@/components/TabBox/TabsList";
import { tmdb } from "@/services/tmdb/tmdb";

type PageParams = {
  params: {
    id: number;
  };
};

const MovieDetails = async ({ params }: PageParams) => {
  const { id } = params;
  const {
    poster_path,
    title,
    vote_average,
    release_date,
    runtime,
    tagline,
    genres,
    spoken_languages,
    production_companies,
    overview,
  } = await tmdb.movies.details(id);

  const year = new Date(release_date).getFullYear();

  return (
    <section className="flex-center relative min-h-[50rem] w-full lg:bg-gray-900">
      <Card className="z-10 flex w-5/6 gap-4 bg-gray-950">
        <TMDBImage
          className="flex-shrink-0 rounded-xl border-2 border-gray-700"
          imageType="poster"
          size="w342"
          src={poster_path as string}
          alt="Poster"
          priority
        />
        <div className="flex w-full flex-col gap-4">
          <DetailsHeader
            className="mt-2 w-full"
            title={title}
            rating={vote_average}
            description={tagline}
            runtime={runtime + " min"}
            releaseYear={year}
          />

          <TabRoot initialValue="details">
            <TabsList>
              <TabsButton value="details">Details</TabsButton>
              <TabsButton value="similar">Similar</TabsButton>
              <TabsButton value="collection">Collection</TabsButton>
            </TabsList>
            <TabContent className="mt-4" value="details">
              <TabDetails
                name="details"
                data={{
                  overview,
                  spoken_languages,
                  genres,
                  production_companies,
                }}
              />
            </TabContent>
          </TabRoot>
        </div>
      </Card>
    </section>
  );
};

export default MovieDetails;
