import { tmdb } from "@/services/tmdb/tmdb";
import Select from "./_temp/GenreDropdown";
import GenreResults from "./_temp/GenreResults";
import Heading from "./_temp/Heading";

const GenresPage = async () => {
  const genres = await tmdb.genres.movies({ language: "en-US" });

  return (
    <section className="h-screen w-screen overflow-y-auto p-4">
      <div className="fixed z-10 mb-6 mt-20 flex w-full items-center gap-2 md:gap-4 lg:mt-32">
        <Heading>
          Find desired <span className="text-purple-400">movies</span>
        </Heading>
        <Select genres={genres.genres} />
      </div>

      <GenreResults className="mt-36 grid h-[40rem] w-full grid-cols-2 gap-4 overflow-y-auto p-2 md:mt-52 md:grid-cols-3 md:p-4 lg:grid-cols-4 xl:grid-cols-6" />
    </section>
  );
};

export default GenresPage;
