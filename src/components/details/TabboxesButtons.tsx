"use client";

import TabboxButton from "./TabboxButton";

const TabboxesButtons: React.FC<any> = () => {
  return (
    <div>
      <div className="text-md flex gap-4 border-b-2 pb-[2px] text-gray-300 sm:gap-8 sm:text-lg">
        <TabboxButton tab="details">Details</TabboxButton>
        <TabboxButton tab="similar">Similar</TabboxButton>
        <TabboxButton tab="collection">Collection</TabboxButton>
      </div>
    </div>
  );
};

export default TabboxesButtons;
