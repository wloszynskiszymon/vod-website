import TMDBImage from "@/assets/TMDBImage";
import Card from "@/components/details/Card";
import DetailsHeader from "@/components/details/DetailsHeader";
import TabDetails from "@/components/details/TabDetails";
import TabCollection from "@/components/TabBox/TabBoxTabs/TabCollection";
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
    belongs_to_collection,
  } = await tmdb.movies.details(id);

  const year = new Date(release_date).getFullYear();

  const hasCollection = belongs_to_collection !== null;

  return (
    <section className="flex-center relative h-screen min-h-[30rem] w-full lg:bg-gray-900">
      <Card className="z-10 flex h-[540px] w-5/6 gap-4 overflow-hidden bg-gray-950">
        <figure className="self-center">
          <TMDBImage
            className="rounded-xl border-2 border-gray-700"
            imageType="poster"
            size="w342"
            src={poster_path as string}
            alt="Poster"
            priority
          />
        </figure>

        <div className="flex h-full min-h-0 flex-1 flex-col gap-4 self-start">
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
              {hasCollection && (
                <TabsButton value="collection">Collection</TabsButton>
              )}
            </TabsList>

            <TabContent
              className="mt-4 flex-1 overflow-y-auto px-1"
              value="details"
            >
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
            {hasCollection && (
              <TabContent
                className="min-h-0 flex-1 overflow-y-auto px-1"
                value="collection"
              >
                <TabCollection
                  className="grid grid-cols-5 gap-2 py-4"
                  collectionId={belongs_to_collection?.id}
                />
              </TabContent>
            )}
          </TabRoot>
        </div>
      </Card>
    </section>
  );
};

export default MovieDetails;
