"use client";

import { cn } from "../../../utilities/utils";

const Input: React.FC<React.HTMLProps<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const word = e.target.value;
    if (word.length > 0) {
      // navigate(`/search?q=${word}`);
    }
  };

  return (
    <input
      {...props}
      className={cn(
        `${className ? className : ""} w-full rounded-full border border-purple-700 bg-gray-900 px-4 py-2 text-white transition-colors duration-200 focus:outline-none focus:ring-0 group-focus-within:border-purple-400`,
      )}
      type="text"
      placeholder="Search..."
      onChange={handleOnChange}
      autoFocus
    />
  );
};

export default Input;
