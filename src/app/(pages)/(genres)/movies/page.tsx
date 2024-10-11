import { tmdb } from "@/services/tmdb/tmdb";
import Select from "../_components/GenreDropdown";
import Heading from "../_components/Heading";
import GenreResults from "../_components/MovieGenreResults";

const GenresPage = async () => {
  const genres = await tmdb.genres.movies({ language: "en-US" });

  return (
    <section className="h-screen w-screen overflow-y-auto bg-inherit p-4">
      <div className="fixed z-10 mb-6 mt-14 flex w-full items-center gap-2 bg-inherit md:mt-20 md:gap-4">
        <Heading>
          Find desired <span className="text-purple-400">movies</span>
        </Heading>
        <Select genres={genres.genres} />
      </div>

      <GenreResults className="mt-24 h-[60rem] w-full overflow-y-auto md:mt-32" />
    </section>
  );
};

export default GenresPage;
