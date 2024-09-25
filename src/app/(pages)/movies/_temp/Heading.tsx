import { cn } from "@/utilities/utils";
import React from "react";

type HeadingProps = React.PropsWithChildren &
  React.HTMLProps<HTMLHeadingElement>;
const Heading = ({ children, className = "", ...props }: HeadingProps) => {
  return (
    <h1
      {...props}
      className={cn(
        `${className} text-md font-extrabold uppercase tracking-wider text-gray-300 md:text-xl lg:text-3xl`,
      )}
    >
      {children}
    </h1>
  );
};

export default Heading;
