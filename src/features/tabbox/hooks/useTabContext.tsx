import { useContext } from "react";
import { TabContext } from "../context/TabContext";

const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("TabContext must be used within a TabProvider");
  }
  return context;
};

export default useTabContext;
