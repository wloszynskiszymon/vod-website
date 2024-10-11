import DetailsHeader from "@/app/(pages)/(details)/_components/DetailsHeader";
import { TvShowDetails } from "tmdb-ts";
import TabContent from "../../features/TabBox/components/TabContent";
import TabRoot from "../../features/TabBox/components/TabRoot";
import TabsButton from "../../features/TabBox/components/TabsButton";
import TabsList from "../../features/TabBox/components/TabsList";
import TabDetails from "./TabDetails";
import TabSimilar from "./TabSimilar";

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
  className = "",
}: TvShowDetails & { className?: string }) => {
  const year = new Date(first_air_date).getFullYear();

  return (
    <div className={className}>
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
