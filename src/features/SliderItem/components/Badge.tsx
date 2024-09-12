import { cn } from "@/utilities/utils";
import React from "react";

type BadgeProps = React.PropsWithChildren & React.HTMLProps<HTMLDivElement>;
const Badge = ({ children, className = "", ...props }: BadgeProps) => {
  return (
    <div
      {...props}
      className={cn(
        `${className} opacity-1 flex-center absolute -right-3 -top-3 h-1/4 w-full translate-x-1/3 translate-y-3/4 rotate-45 bg-purple-800 text-center text-[13px] tracking-wider text-white group-hover:opacity-0 sm:text-sm lg:-right-4 lg:-top-4`,
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
