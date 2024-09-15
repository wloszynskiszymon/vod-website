import { cn } from "@/utilities/utils";
import React from "react";

type BadgeProps = React.PropsWithChildren &
  React.HTMLProps<HTMLDivElement> & {
    imageType: "poster" | "backdrop";
  };

const Badge = ({
  children,
  className = "",
  imageType,
  ...props
}: BadgeProps) => {
  return (
    <div
      {...props}
      className={cn(
        `${className} opacity-1 absolute right-1 top-1 rounded-lg bg-purple-900 bg-opacity-90 px-1 py-0.5 text-center text-xs tracking-wider text-white`,
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
