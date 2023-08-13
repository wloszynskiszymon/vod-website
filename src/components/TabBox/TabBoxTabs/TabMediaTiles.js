import { renderMovieTiles } from '../../../utilities/UtilitiesFunctions';

const TabMediaTiles = (props) => {
  const mediaData = props.data.data;
  const mediaType = props.data.media_type;

  return (
    <div className='w-full h-full'>
      <div className='grid grid-cols-3 gap-4 p-4 w-full h-full overflow-y-auto -translate-x-4'>
        {renderMovieTiles(mediaData, mediaType)}
      </div>
    </div>
  );
};

export default TabMediaTiles;
