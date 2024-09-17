"use client";

import { useContext } from "react";
import { TabBoxContext } from "..";
import { FixMeLater } from "../../../types/types";
import { renderMovieTiles } from "../../../utilities/UtilitiesFunctions";

const TabCollection = ({ data, name }: FixMeLater) => {
  const { activeTab } = useContext<FixMeLater>(TabBoxContext);
  if (activeTab !== name) {
    return null;
  }

  return (
    <div className="h-full w-full">
      <div className="grid h-full w-full -translate-x-2 grid-cols-2 gap-4 overflow-y-auto px-2 sm:-translate-x-4 sm:grid-cols-3 sm:p-4">
        {renderMovieTiles(data)}
      </div>
    </div>
  );
};

export default TabCollection;
