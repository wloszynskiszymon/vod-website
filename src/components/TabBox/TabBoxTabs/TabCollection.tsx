import MediaSliderItem from "@/features/SliderItem/MediaSliderItem";
import { tmdb } from "@/services/tmdb/tmdb";
import { formatMoviesForSlider } from "@/services/tmdb/utils/format";

type TabCollectionProps = React.HTMLProps<HTMLDivElement> & {
  collectionId: number | undefined;
};

const TabCollection = async ({
  collectionId,
  className = "",
  ...props
}: TabCollectionProps) => {
  const { parts } = await tmdb.collections.details(collectionId!!);
  const movies = formatMoviesForSlider(parts, "poster");

  return (
    <div
      {...props}
      className={`${className}`}
    >
      {movies.map((movie) => (
        <MediaSliderItem imageType="poster" mediaType="movie" {...movie} />
      ))}
    </div>
  );
};

export default TabCollection;
