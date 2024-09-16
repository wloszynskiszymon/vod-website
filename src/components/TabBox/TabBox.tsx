"use client";
import { createContext, useContext, useState } from "react";
import { FixMeLater } from "../../types/types";

export const TabBoxContext = createContext<FixMeLater>("");

const TabBox = ({ children, initialActiveTab }: FixMeLater) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const onTabButtonClick = (tabName: FixMeLater) => {
    setActiveTab(tabName);
  };

  return (
    <TabBoxContext.Provider value={{ activeTab, onTabButtonClick }}>
      {children}
    </TabBoxContext.Provider>
  );
};

const ButtonContainer = ({ children }: FixMeLater) => {
  return (
    <div className="text-md my-4 flex w-fit gap-4 border-b-2 pb-[2px] text-gray-300 sm:gap-8 sm:text-lg">
      {children}
    </div>
  );
};

const Button = ({ children, name }: FixMeLater) => {
  const { activeTab, onTabButtonClick } = useContext(TabBoxContext);
  const isActive = name === activeTab;

  const conditionalClasses = `${
    isActive ? "text-fuchsia-700" : "text-gray-300"
  }`;
  const styles = isActive ? { boxShadow: "0 6px rgb(162, 28, 175)" } : {};

  return (
    <button
      className={`font-bold uppercase transition duration-300 ${conditionalClasses}`}
      style={styles}
      onClick={() => onTabButtonClick(name)}
    >
      {children}
    </button>
  );
};

const Content = ({ children }: FixMeLater) => {
  return <div className={`h-full w-full`}>{children}</div>;
};

TabBox.ButtonContainer = ButtonContainer;
TabBox.Button = Button;
TabBox.Content = Content;

export default TabBox;
