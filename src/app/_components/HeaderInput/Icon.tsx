import React from "react";
import { cn } from "../../../utilities/utils";

const Icon: React.FC<
  React.HTMLProps<HTMLDivElement> & React.PropsWithChildren
> = ({ className, children, ...props }) => {
  return (
    <figure
      {...props}
      className={cn(
        `${className ? className : ""} flex-center absolute bottom-0 right-0 h-full cursor-pointer rounded-r-full bg-purple-700 px-3 py-1 transition-colors duration-200 group-focus-within:bg-purple-400 lg:px-4`,
      )}
      role="button"
      aria-label="Search"
    >
      {children}
    </figure>
  );
};

export default Icon;
