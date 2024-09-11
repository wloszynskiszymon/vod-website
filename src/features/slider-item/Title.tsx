import { cn } from "@/utilities/utils";
import React from "react";

type TitleProps = React.PropsWithChildren & React.HTMLProps<HTMLDivElement>;
const Title = ({ children, className = "", ...props }: TitleProps) => {
  return (
    <div
      {...props}
      className={cn(
        `${className} flex-center absolute left-0 top-0 z-10 h-full w-full bg-gray-900 bg-opacity-20 text-center text-sm font-bold tracking-tighter text-white opacity-0 duration-200 group-hover:bg-black group-hover:bg-opacity-50 group-hover:opacity-100 lg:text-lg`,
      )}
    >
      {children}
    </div>
  );
};

export default Title;
