import React, { createContext, useState, useContext } from 'react';

export const TabBoxContext = createContext();

const TabBox = ({ children, initialActiveTab }) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const onTabButtonClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <TabBoxContext.Provider value={{ activeTab, onTabButtonClick }}>
      {children}
    </TabBoxContext.Provider>
  );
};

const ButtonContainer = ({ children }) => {
  return (
    <div className='flex gap-4 sm:gap-8 w-fit text-gray-300 border-b-2 pb-[2px] my-4 text-md sm:text-lg'>
      {children}
    </div>
  );
};

const Button = ({ children, name }) => {
  const { activeTab, onTabButtonClick } = useContext(TabBoxContext);
  const isActive = name === activeTab;

  const conditionalClasses = `${
    isActive ? 'text-fuchsia-700' : 'text-gray-300'
  }`;
  const styles = isActive ? { boxShadow: '0 6px rgb(162, 28, 175)' } : {};

  return (
    <button
      className={`uppercase font-bold transition duration-300 ${conditionalClasses}`}
      style={styles}
      onClick={() => onTabButtonClick(name)}
    >
      {children}
    </button>
  );
};

const Content = ({ children }) => {
  return <div className={`w-full h-full`}>{children}</div>;
};

TabBox.ButtonContainer = ButtonContainer;
TabBox.Button = Button;
TabBox.Content = Content;

export default TabBox;

// {/* <div className='flex gap-6 sm:gap-8 w-fit text-gray-300 border-b-2 pb-[2px] my-2 sm:my-4 text-md sm:text-lg'>
//         {tabs.map((tab) => (
//           <TabButton
//             key={`btn-${tab?.name}`}
//             onClick={() => onTabButtonClick(tab?.name)}
//             isActive={activeTab === tab?.name}
//           >
//             {tab?.label}
//           </TabButton>
//         ))}
//       </div>

//       <article className='h-3/4 w-full text-white pt-4'>
//         {tabs.map((tab, i) => (
//           <div
//             key={`${tab?.name}-${i}`}
//             className={`w-full h-full ${
//               activeTab === tab?.name ? 'block' : 'hidden'
//             }`}
//           >
//             {tab?.content}
//           </div>
//         ))}
//       </article> */}
