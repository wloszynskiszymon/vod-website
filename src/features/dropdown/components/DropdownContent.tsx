import { cn } from "@/utilities/utils";
import React from "react";
import useDropdownContext from "../hooks/useDropdownContext";

type DropdownContentProps = React.PropsWithChildren &
  React.HTMLProps<HTMLDivElement>;
const DropdownContent = ({
  children,
  className = "",
  ...props
}: DropdownContentProps) => {
  const { isOpen } = useDropdownContext();

  if (!isOpen) return null;

  return (
    <div
      {...props}
      className={cn(
        `${className} absolute right-0 z-20 block min-w-[15rem] rounded-xl bg-gray-900 p-4`,
      )}
    >
      {children}
    </div>
  );
};

export default DropdownContent;
