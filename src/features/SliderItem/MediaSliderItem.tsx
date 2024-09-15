import React from "react";

import TMDBImage from "@/assets/TMDBImage";
import { SliderShow } from "@/types/types";
import { checkIsNew } from "@/utilities/UtilitiesFunctions";
import {
  MediaSliderItemBadge,
  MediaSliderItemRoot,
  MediaSliderItemTitle,
} from "./components";

type SliderShowProps = SliderShow & {
  mediaType: "movie" | "tv";
  imageType?: "poster" | "backdrop";
};

const MediaSliderItem = ({
  id,
  title,
  releaseDate,
  image,
  mediaType,
  imageType = "backdrop",
}: SliderShowProps) => {
  // const onClickHandler = () => navigate(`/${media_type}/${id}`);
  const isNew = checkIsNew(releaseDate);

  return (
    <MediaSliderItemRoot>
      <MediaSliderItemTitle>{title}</MediaSliderItemTitle>
      {isNew && <MediaSliderItemBadge>NEW</MediaSliderItemBadge>}
      <TMDBImage
        imageType={imageType}
        size="w300"
        src={image}
        className="h-full w-full object-cover group-hover:blur-sm"
        alt={`${title}`}
      />
    </MediaSliderItemRoot>
  );
};

export default React.memo(MediaSliderItem);
