import { cn } from "@/utilities/utils";
import React from "react";

type RootProps = React.PropsWithChildren & React.HTMLProps<HTMLDivElement>;
const Root = ({ children, className = "", ...props }: RootProps) => {
  return (
    <figure
      {...props}
      className={cn(
        `${className} flex-center group relative w-full cursor-pointer overflow-hidden rounded-xl border-2 border-gray-600 bg-blue-950 drop-shadow-2xl transition-all duration-200 hover:scale-105 hover:border-white`,
      )}
    >
      {children}
    </figure>
  );
};

export default Root;
