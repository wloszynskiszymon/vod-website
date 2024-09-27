"use client";
import DropdownContent from "@/features/Dropdown/components/DropdownContent";
import DropdownRoot from "@/features/Dropdown/components/DropdownRoot";
import DropdownTrigger from "@/features/Dropdown/components/DropdownTrigger";
import { FixMeLater } from "@/types/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Genre } from "tmdb-ts";
import { Genres } from "tmdb-ts/dist/endpoints";

const Select = ({ genres }: Genres) => {
  const router = useRouter();
  const pathname = usePathname();
  const currGenre = useSearchParams()?.get("genre");

  const [currentGenre, setCurrentGenre] = useState<Genre>(
    genres.find((genre) => genre.id === Number(currGenre)) || genres[0],
  );

  useEffect(() => {
    if (!currGenre)
      router.push(`${pathname}?genre=${genres[0].id}`, { scroll: false });
  }, [currGenre]);

  // Set new genre, close dropdown and reset data to refetch it.
  const onClickGenre = (e: FixMeLater) => {
    setCurrentGenre({
      id: e.target.id,
      name: e.target.textContent,
    });
    router.replace(`${pathname}?genre=${e.target.id}`, { scroll: false });
  };

  return (
    <DropdownRoot>
      <DropdownTrigger className="md:text-md cursor-pointer rounded-lg border-2 border-gray-300 bg-gray-900 px-2 py-1 text-xs text-gray-300 lg:text-lg">
        {currentGenre.name}
      </DropdownTrigger>
      <DropdownContent className="md:text-md w-[15rem] text-sm text-gray-300 lg:w-[20rem]">
        <ul className="grid grid-cols-3 items-center justify-center gap-2">
          {genres.map(({ id, name }: Genre) => (
            <li
              className="w-full cursor-pointer transition-all duration-100 hover:underline"
              id={id.toString()}
              key={id}
              onClick={onClickGenre}
            >
              {name}
            </li>
          ))}
        </ul>
      </DropdownContent>
    </DropdownRoot>
  );
};

export default Select;
