import React from "react";
import { cn } from "../../utilities/utils";

type HeaderTitleProps = React.PropsWithChildren &
  React.HTMLProps<HTMLHeadingElement>;

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1
      {...props}
      className={cn(
        `${className ? className : ""} font-extrabold tracking-wider text-gray-300`,
      )}
    >
      {children}
    </h1>
  );
};

export default HeaderTitle;
