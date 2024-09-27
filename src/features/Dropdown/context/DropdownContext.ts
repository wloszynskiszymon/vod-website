"use client";
import { createContext } from "react";

type DropdownContextType = {
  activeText: string;
  setActiveText: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined,
);
