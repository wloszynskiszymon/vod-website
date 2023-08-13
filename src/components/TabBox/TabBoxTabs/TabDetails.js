import React from 'react';

import { formatObjectData } from '../../../utilities/UtilitiesFunctions';

const TabDetails = React.memo((props) => {
  const {
    overview,
    genres,
    spoken_languages: spokenLanguages,
    production_companies: productionCompanies,
  } = props.data;

  return (
    <section>
      <article className='text-gray-300 mb-6'>{overview}</article>
      <div className='flex'>
        <div className='flex flex-col gap-y-2'>
          <p className='mr-8'>Genres: </p>
          <p className='mr-8'>Languages: </p>
          <p className='mr-8'>Production: </p>
        </div>
        <div className='flex flex-col gap-y-2'>
          <p className='text-gray-400'>{formatObjectData(genres, 'name')}</p>
          <p className='text-gray-400'>
            {formatObjectData(spokenLanguages, 'english_name')}
          </p>
          <p className='text-gray-400'>
            {formatObjectData(productionCompanies, 'name')}
          </p>
        </div>
      </div>
    </section>
  );
});

export default TabDetails;
