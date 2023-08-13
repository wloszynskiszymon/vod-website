import { useState } from 'react';
import TabButton from './TabButton';

const TabBox = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  if (!tabs || tabs.length === 0) {
    return <div></div>; // or render a default content, message, or any appropriate UI for no tabs.
  }

  const onTabButtonClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className='flex gap-8 w-fit text-gray-300 border-b-2 pb-[2px] my-4'>
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

      <article className='h-1/2 w-full text-white pt-4'>
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
