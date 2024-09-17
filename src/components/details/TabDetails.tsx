"use client";

import { FixMeLater } from "../../types/types";
import { formatObjectData } from "../../utilities/UtilitiesFunctions";
import useTabbox from "./useTabbox";

const TabDetails = ({ data, name }: FixMeLater) => {
  const { activeTab } = useTabbox();

  console.log(activeTab);
  console.log(name);

  if (activeTab !== name) return <></>;

  const {
    overview,
    genres,
    spoken_languages: spokenLanguages,
    production_companies: productionCompanies,
  } = data;

  return (
    <section className="md:text-md flex-grow text-sm">
      <article className="mb-6 text-gray-300 sm:mb-3">{overview}</article>
      <table>
        <tbody>
          <tr className="my-4">
            <td className="py-2 pr-4 text-white sm:py-1">Genres: </td>
            <td className="text-gray-400">
              {formatObjectData(genres, "name")}
            </td>
          </tr>
          <tr>
            <td className="py-2 pr-4 text-white sm:py-1">Languages: </td>
            <td className="text-gray-400">
              {formatObjectData(spokenLanguages, "english_name")}
            </td>
          </tr>
          <tr>
            <td className="py-2 pr-4 text-white sm:py-1">Production: </td>
            <td className="text-gray-400">
              {formatObjectData(productionCompanies, "name")}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TabDetails;
