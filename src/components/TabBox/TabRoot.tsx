"use client";
import React from "react";
import { TabContext } from "./context/TabContext";
import useTabs from "./hooks/useTabs";

type TabRootProps = React.PropsWithChildren & {
  initialValue: string;
};

const TabRoot = ({ children, initialValue }: TabRootProps) => {
  const [activeTab, handleActiveTabChange] = useTabs(initialValue);

  return (
    <TabContext.Provider value={{ activeTab, handleActiveTabChange }}>
      {children}
    </TabContext.Provider>
  );
};

export default TabRoot;
