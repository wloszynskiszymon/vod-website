import { TvShowDetails } from "tmdb-ts";
import DetailsHeader from "../details/DetailsHeader";
import TabDetails from "../details/TabDetails";
import TabContent from "./TabContent";
import TabRoot from "./TabRoot";
import TabsButton from "./TabsButton";
import TabSimilar from "./TabSimilar";
import TabsList from "./TabsList";

const TvShowTabs = ({
  first_air_date,
  name,
  vote_average,
  tagline,
  number_of_seasons,
  overview,
  spoken_languages,
  genres,
  production_companies,
  id,
}: TvShowDetails) => {
  const year = new Date(first_air_date).getFullYear();

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col gap-4 self-start">
      <DetailsHeader
        className="mt-2 w-full"
        title={name}
        rating={vote_average}
        description={tagline}
        runtime={number_of_seasons + " seasons"}
        releaseYear={year}
      />

      <TabRoot initialValue="details">
        <TabsList>
          <TabsButton value="details">Details</TabsButton>
          <TabsButton value="similar">Similar</TabsButton>
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
        <TabContent
          className="min-h-0 flex-1 overflow-y-auto px-1"
          value="similar"
          id="tv-similar"
        >
          <TabSimilar parentId="tv-similar" mediaType="tv" showId={id} />
        </TabContent>
      </TabRoot>
    </div>
  );
};

export default TvShowTabs;
