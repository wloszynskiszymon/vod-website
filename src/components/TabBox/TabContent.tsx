"use client"
import { cn } from "@/utilities/utils";
import React from "react";
import useTabContext from "./hooks/useTabContext";

type TabContentProps = React.PropsWithChildren &
  React.HTMLProps<HTMLDivElement> & {
    value: string;
  };
const TabContent = ({
  children,
  className = "",
  value,
  ...props
}: TabContentProps) => {
  const { activeTab } = useTabContext();
  if (activeTab !== value) return <></>;

  return (
    <div {...props} className={cn(`${className} `)}>
      {children}
    </div>
  );
};

export default TabContent;
