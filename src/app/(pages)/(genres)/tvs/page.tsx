import { tmdb } from "@/services/tmdb/tmdb";
import { Suspense } from "react";
import GenreDropdown from "../_components/GenreDropdown";
import Heading from "../_components/Heading";
import TVGenreResults from "../_components/TVGenreResults";

const GenresPage = async () => {
  const genres = await tmdb.genres.tvShows({ language: "en-US" });

  return (
    <section className="h-screen w-screen overflow-y-auto bg-inherit p-4">
      <Suspense
        fallback={
          <div className="flex-center text-xl text-white">Loading...</div>
        }
      >
        <div className="fixed z-10 mb-6 mt-14 flex w-full items-center gap-2 bg-inherit md:mt-20 md:gap-4">
          <Heading>
            Find desired <span className="text-purple-400">TV shows</span>
          </Heading>
          <GenreDropdown genres={genres.genres} />
        </div>
        <TVGenreResults className="mt-24 h-[60rem] w-full overflow-y-auto md:mt-32" />
      </Suspense>
    </section>
  );
};

export default GenresPage;
