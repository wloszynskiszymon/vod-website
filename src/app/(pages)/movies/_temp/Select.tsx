"use client";
import { FixMeLater } from "@/types/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Genre } from "tmdb-ts";
import { Genres } from "tmdb-ts/dist/endpoints";

const Select = ({ genres }: Genres) => {
  const router = useRouter();
  const pathname = usePathname();
  const currGenre = useSearchParams()?.get("genre");

  const [dropdownActive, setDropdownActive] = useState<boolean>(false);
  const [currentGenre, setCurrentGenre] = useState<Genre>(
    genres.find((genre) => genre.id === Number(currGenre)) || genres[0],
  );

  useEffect(() => {
    if (!currGenre)
      router.push(`${pathname}?genre=${genres[0].id}`, { scroll: false });
  }, [currGenre]);

  // Open dropdown
  const onClickDropdownHandler = () =>
    setDropdownActive((prevState) => !prevState);

  // Set new genre, close dropdown and reset data to refetch it.
  const onClickGenre = (e: FixMeLater) => {
    setCurrentGenre({
      id: e.target.id,
      name: e.target.textContent,
    });
    setDropdownActive(false);
    router.replace(`${pathname}?genre=${e.target.id}`, { scroll: false });
  };

  return (
    <div className="relative block">
      <div
        onClick={onClickDropdownHandler}
        className="md:text-md cursor-pointer rounded-lg border-2 border-gray-300 bg-gray-900 px-2 py-1 text-xs text-gray-300 lg:text-lg"
      >
        {currentGenre.name}
        <span className="ml-2"> &#8744;</span>
      </div>
      {dropdownActive && (
        <div className="absolute right-0 z-20 block w-[15rem] rounded-xl bg-gray-900 p-4 lg:w-[20rem]">
          <ul className="md:text-md grid h-full w-full grid-cols-3 items-center justify-center gap-2 text-sm text-gray-300">
            {genres.map(({ id, name }: FixMeLater) => (
              <li
                className="cursor-pointer transition-all duration-100 hover:underline"
                id={id}
                key={id}
                onClick={onClickGenre}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
