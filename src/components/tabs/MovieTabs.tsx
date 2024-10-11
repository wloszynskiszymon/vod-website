import { MovieDetails } from "tmdb-ts";
import DetailsHeader from "../../app/(pages)/(details)/_components/DetailsHeader";
import TabContent from "../../features/TabBox/components/TabContent";
import TabRoot from "../../features/TabBox/components/TabRoot";
import TabsButton from "../../features/TabBox/components/TabsButton";
import TabsList from "../../features/TabBox/components/TabsList";
import TabCollection from "./TabCollection";
import TabDetails from "./TabDetails";
import TabSimilar from "./TabSimilar";

const MovieTabs = ({
  release_date,
  belongs_to_collection,
  title,
  vote_average,
  tagline,
  runtime,
  overview,
  spoken_languages,
  genres,
  production_companies,
  id,
}: MovieDetails) => {
  const year = new Date(release_date).getFullYear();

  return (
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
          {belongs_to_collection !== null && (
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

        {belongs_to_collection !== null && (
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
        <TabContent
          className="min-h-0 flex-1 overflow-y-auto px-1"
          value="similar"
          id="movie-similar"
        >
          <TabSimilar parentId="movie-similar" mediaType="movie" showId={id} />
        </TabContent>
      </TabRoot>
    </div>
  );
};

export default MovieTabs;
