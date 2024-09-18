"use client";

import useTabContext from "./hooks/useTabContext";

type TabsButtonProps = React.PropsWithChildren & {
  value: string; // Id name to identify tab and display it in the URL
};

const TabsButton = ({ value, children }: TabsButtonProps) => {
  const { activeTab, handleActiveTabChange } = useTabContext();

  if (!activeTab) return <></>;

  return (
    <button
      className={`font-bold uppercase ${activeTab === value ? "text-fuchsia-700" : "text-gray-300"} transition duration-300`}
      style={
        activeTab === value ? { boxShadow: "0 6px rgb(162, 28, 175)" } : {}
      }
      onClick={() => handleActiveTabChange(value)}
    >
      {children}
    </button>
  );
};

export default TabsButton;
