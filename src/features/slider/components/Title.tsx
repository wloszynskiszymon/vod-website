import React from "react";
import { cn } from "../../../utilities/utils";

type SliderTitleProps = React.PropsWithChildren &
  React.HTMLProps<HTMLHeadingElement>;
const SliderTitle = ({ children, className, ...props }: SliderTitleProps) => {
  return (
    <h2
      {...props}
      className={cn(
        `${className ? className : ""} mb-2 h-8 text-center text-lg font-extrabold uppercase text-gray-300 md:mb-4 md:ml-4 md:text-start md:text-xl lg:text-2xl lg:tracking-wider xl:text-3xl`,
      )}
    >
      {children}
    </h2>
  );
};

export default SliderTitle;
