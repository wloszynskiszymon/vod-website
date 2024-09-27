import { useContext } from "react";
import { DropdownContext } from "./../context/DropdownContext";

const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("DropdownContext must be used within a DropdownProvider!");
  }
  return context;
};

export default useDropdownContext;
