import React from "react";
import { cn } from "../../../utilities/utils";

type SliderRootProps = React.PropsWithChildren &
  React.HTMLProps<HTMLDivElement>;

const SliderRoot: React.FC<SliderRootProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <section {...props} className={cn(`${className} relative px-14`)}>
      {children}
    </section>
  );
};

export default SliderRoot;
