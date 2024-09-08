"use client";
import { FixMeLater } from "../../types/types";
import { cn } from "../../utilities/utils";
import SearchIcon from "../UI/Icons/SearchIcon";

type HeaderInputProps = React.HTMLProps<HTMLInputElement>;

const HeaderInput: React.FC<HeaderInputProps> = ({ className, ...props }) => {
  const onChangeHandler = (e: FixMeLater) => {
    const word = e.target.value;
    if (word.length > 0) {
      // navigate(`/search?q=${word}`);
    }
  };

  return (
    <div
      className={cn(
        `${
          className ? className : ""
        } flex-center relative mb-6 mt-3 w-8/12 md:mb-10 md:mt-5 lg:mt-10 lg:w-2/5 2xl:mt-16 2xl:w-1/4`,
      )}
    >
      <input
        {...props}
        className="w-full rounded-full border border-purple-700 bg-gray-900 px-4 py-2 text-white focus:border-purple-400"
        type="text"
        placeholder="Search..."
        onChange={onChangeHandler}
        autoFocus
      />
      <figure className="flex-center absolute bottom-0 right-0 h-full cursor-pointer rounded-r-full bg-purple-700 px-3 py-1 lg:px-4">
        <SearchIcon />
      </figure>
    </div>
  );
};

export default HeaderInput;
