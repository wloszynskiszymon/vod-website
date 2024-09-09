import React from "react";
import { cn } from "../../../utilities/utils";

type SliderTitleProps = React.PropsWithChildren &
  React.HTMLProps<HTMLHeadingElement>;
const SliderTitle = ({ children, className, ...props }: SliderTitleProps) => {
  return (
    <h2
      {...props}
      className={cn(
        `${className ? className : ""} mb-2 font-extrabold uppercase tracking-wider text-gray-300 md:px-4 md:text-xl lg:px-5 lg:text-2xl`,
      )}
    >
      {children}
    </h2>
  );
};

export default SliderTitle;
