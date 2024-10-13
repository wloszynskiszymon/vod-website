"use client";
import { cn } from "@/utilities/utils";
import React, { useEffect, useRef, useState } from "react";
import { DropdownContext } from "../context/DropdownContext";

type DropdownRootProps = React.PropsWithChildren &
  React.HTMLProps<HTMLDivElement> & {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  };

const DropdownRoot = ({
  children,
  className = "",
  ...props
}: DropdownRootProps) => {
  const [activeText, setActiveText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dropdownContext = { activeText, setActiveText, isOpen, setIsOpen };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div
      {...props}
      ref={dropdownRef}
      onClick={toggleDropdown}
      className={cn(`${className} dropdown-root relative block`)}
    >
      <DropdownContext.Provider value={dropdownContext}>
        {children}
      </DropdownContext.Provider>
    </div>
  );
};

export default DropdownRoot;
