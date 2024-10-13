import { cn } from "@/utilities/utils";
import React from "react";
import useDropdownContext from "../hooks/useDropdownContext";

type DropdownTriggerProps = React.PropsWithChildren &
  React.HTMLProps<HTMLDivElement>;
const DropdownTrigger = ({
  children,
  className = "",
  ...props
}: DropdownTriggerProps) => {
  const { isOpen, setIsOpen } = useDropdownContext();

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div
      {...props}
      onClick={toggleDropdown}
      className={cn(`${className} cursor-pointer`)}
    >
      {children} <span className="ml-2"> &#8744;</span>
    </div>
  );
};

export default DropdownTrigger;
