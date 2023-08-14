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
    <section className='md:text-md text-sm'>
      <article className='text-gray-300 sm:mb-3 mb-6 '>{overview}</article>
      <table className='w-full'>
        <tbody>
          <tr className='my-4'>
            <td className='py-2 sm:py-1 pr-4'>Genres: </td>
            <td className='text-gray-400'>
              {formatObjectData(genres, 'name')}
            </td>
          </tr>
          <tr>
            <td className='py-2 sm:py-1 pr-4'>Languages: </td>
            <td className='text-gray-400'>
              {formatObjectData(spokenLanguages, 'english_name')}
            </td>
          </tr>
          <tr>
            <td className='py-2 sm:py-1 pr-4'>Production: </td>
            <td className='text-gray-400'>
              {formatObjectData(productionCompanies, 'name')}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
});

export default TabDetails;
