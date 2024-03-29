import { useContext } from 'react';
import { renderMovieTiles } from '../../../utilities/UtilitiesFunctions';
import { TabBoxContext } from '../TabBox';

const TabCollection = ({ data, name }) => {
  const { activeTab } = useContext(TabBoxContext);
  if (activeTab !== name) {
    return null;
  }

  return (
    <div className='w-full h-full'>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 px-2 sm:p-4 w-full h-full overflow-y-auto sm:-translate-x-4 -translate-x-2'>
        {renderMovieTiles(data)}
      </div>
    </div>
  );
};

export default TabCollection;
