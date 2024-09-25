"use client";
import { createContext } from "react";

type TabBoxContextType = {
  activeTab: string;
  handleActiveTabChange: (tab: string) => void;
};

export const TabContext = createContext<TabBoxContextType | undefined>(
  undefined,
);
