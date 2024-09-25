"use client";
import { FixMeLater } from "@/types/types";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

const Select = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [currentGenre, setCurrentGenre] = useState<FixMeLater>(null);

  // When changing route reset the currentGenre to initial state
  useEffect(() => {
    setCurrentGenre(null);
  }, [location.pathname]);

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
  };

  return (
    <div className="relative block">
      <div
        onClick={onClickDropdownHandler}
        className="md:text-md cursor-pointer rounded-lg border-2 border-gray-300 bg-gray-900 px-2 py-1 text-xs text-gray-300 lg:text-lg"
      >
        {currentGenre?.name ? (
          currentGenre.name
        ) : (
          <PulseLoader color={"Silver"} size={8} />
        )}
        {currentGenre && <span className="ml-2"> &#8744;</span>}
      </div>
      {dropdownActive && (
        <div className="absolute right-0 z-20 block w-[15rem] rounded-xl bg-gray-900 px-4 py-2 lg:w-[20rem]">
          {/* <ul className="md:text-md flex flex-wrap gap-2 text-sm text-gray-300 lg:text-lg">
            {genreListIsSuccess &&
              genreListData.genres.map((singleData: FixMeLater) => {
                const { id, name } = singleData;
                return (
                  <li
                    className="cursor-pointer border-b-2 border-transparent transition-all duration-100 hover:border-white"
                    id={id}
                    key={id}
                    onClick={onClickGenre}
                  >
                    {name}
                  </li>
                );
              })}
          </ul> */}
        </div>
      )}
    </div>
  );
};

export default Select;
