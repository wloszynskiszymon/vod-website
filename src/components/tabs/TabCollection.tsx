import Poster from "@/features/poster/Poster";
import { tmdb } from "@/services/tmdb/tmdb";
import { formatMoviesForSlider } from "@/services/tmdb/utils/format";

type TabCollecitonProps = React.HTMLProps<HTMLDivElement> & {
  collectionId: number | undefined;
};

// Only movies have collections
const TabColleciton = async ({
  collectionId,
  className = "",
  ...props
}: TabCollecitonProps) => {
  const { parts } = await tmdb.collections.details(collectionId!!);
  const movies = formatMoviesForSlider(parts, "poster");

  return (
    <div {...props} className={`${className}`}>
      {movies.map((movie) => (
        <Poster imageType="poster" mediaType="movie" {...movie} />
      ))}
    </div>
  );
};

export default TabColleciton;
