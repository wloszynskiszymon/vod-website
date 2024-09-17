import { cn } from "@/utilities/utils";
import React from "react";

type TabsListProps = React.PropsWithChildren & React.HTMLProps<HTMLDivElement>;
const TabsList = ({ children, className = "", ...props }: TabsListProps) => {
  return (
    <div
      {...props}
      className={cn(
        `${className} text-md flex gap-4 border-b-2 pb-[2px] text-gray-300 sm:gap-8 sm:text-lg`,
      )}
    >
      {children}
    </div>
  );
};

export default TabsList;
