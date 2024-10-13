"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type TabBoxContextType = {
  activeTab: string;
  onTabButtonClick: (tabName: string) => void;
};

// Tworzenie kontekstu z domyślną wartością
export const TabBoxContext = createContext<TabBoxContextType | undefined>(
  undefined,
);

type TabBoxProps = {
  children: ReactNode;
  initialActiveTab: string;
};

const TabBox = ({ children, initialActiveTab }: TabBoxProps) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const onTabButtonClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <TabBoxContext.Provider value={{ activeTab, onTabButtonClick }}>
      {children}
    </TabBoxContext.Provider>
  );
};

const ButtonContainer = ({ children }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div className="text-md my-4 flex w-fit gap-4 border-b-2 pb-[2px] text-gray-300 sm:gap-8 sm:text-lg">
      {children}
    </div>
  );
};

type ButtonProps = {
  children: ReactNode;
  name: string;
};

const Button = ({ children, name }: ButtonProps) => {
  const context = useContext(TabBoxContext);
  if (!context) {
    throw new Error("Button must be used within a TabBox");
  }
  const { activeTab, onTabButtonClick } = context;
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

const Content = ({ children }: React.HTMLProps<HTMLDivElement>) => {
  return <div className={`h-full w-full`}>{children}</div>;
};

TabBox.ButtonContainer = ButtonContainer;
TabBox.Button = Button;
TabBox.Content = Content;

export default TabBox;
