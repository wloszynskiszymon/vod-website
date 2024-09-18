"use client";

import { tmdb } from "@/services/tmdb/tmdb";
import { useEffect } from "react";

const TabCollection = ({
  collectionId,
}: {
  collectionId: number | undefined;
}) => {
  useEffect(() => {
    if (!collectionId) return;
    tmdb.collections.details(collectionId).then((data) => {
      console.log(data);
    });
  });
  return (
    <div className="h-full w-full">
      <div className="grid h-full w-full -translate-x-2 grid-cols-2 gap-4 overflow-y-auto px-2 sm:-translate-x-4 sm:grid-cols-3 sm:p-4">
        <></>
      </div>
    </div>
  );
};

export default TabCollection;
