"use client";
import { cn } from "@/utilities/utils";
import React from "react";
import { TabContext } from "./context/TabContext";
import useTabs from "./hooks/useTabs";

type TabRootProps = React.PropsWithChildren &
  React.HTMLProps<HTMLDivElement> & {
    initialValue: string;
  };

const TabRoot = ({
  children,
  initialValue,
  className = "",
  ...props
}: TabRootProps) => {
  const [activeTab, handleActiveTabChange] = useTabs(initialValue);

  return (
    <div {...props} className={cn(`${className} `)}>
      <TabContext.Provider value={{ activeTab, handleActiveTabChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
};

export default TabRoot;
