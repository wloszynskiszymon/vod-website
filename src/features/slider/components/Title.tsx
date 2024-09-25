import React from "react";
import { cn } from "../../../utilities/utils";

type SliderTitleProps = React.PropsWithChildren &
  React.HTMLProps<HTMLHeadingElement>;
const SliderTitle = ({ children, className, ...props }: SliderTitleProps) => {
  return (
    <h2
      {...props}
      className={cn(
        `${className ? className : ""} mb-4 h-8 font-extrabold uppercase tracking-wider text-gray-300 md:ml-4 md:text-xl lg:text-2xl`,
      )}
    >
      {children}
    </h2>
  );
};

export default SliderTitle;
