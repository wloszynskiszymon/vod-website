"use client";
import { cn } from "@/utilities/utils";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { TabContext } from "./context/TabContext";

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
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);
  const tab = searchParams?.get("tab");
  const [activeTab, setActiveTab] = useState<string>(tab || initialValue);

  useEffect(() => {
    if (!tab) {
      const { pathname } = new URL(window.location.href);
      router.replace(`${pathname}?tab=${initialValue}`, { scroll: false });
    }
  }, [initialValue, tab]);

  const handleActiveTabChange = (tab: string) => {
    if (tab === activeTab) return;
    const { pathname } = new URL(window.location.href);
    router.replace(`${pathname}?tab=${tab}`, { scroll: false });
    setActiveTab(tab);
  };

  return (
    <div {...props} className={cn(`${className} `)}>
      <TabContext.Provider value={{ activeTab, handleActiveTabChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
};

export default TabRoot;
