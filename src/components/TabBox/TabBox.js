import { useState } from 'react';
import TabButton from './TabButton';

const TabBox = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  if (!tabs || tabs.length === 0) {
    return <div></div>;
  }

  const onTabButtonClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className='flex gap-6 sm:gap-8 w-fit text-gray-300 border-b-2 pb-[2px] my-2 sm:my-4 text-md sm:text-lg'>
        {tabs.map((tab) => (
          <TabButton
            key={`btn-${tab.name}`}
            onClick={() => onTabButtonClick(tab.name)}
            isActive={activeTab === tab.name}
          >
            {tab.label}
          </TabButton>
        ))}
      </div>

      <article className='h-3/4 w-full text-white pt-4'>
        {tabs.map((tab, i) => (
          <div
            key={`${tab.name}-${i}`}
            className={`w-full h-full ${
              activeTab === tab.name ? 'block' : 'hidden'
            }`}
          >
            {tab.content}
          </div>
        ))}
      </article>
    </>
  );
};

export default TabBox;
