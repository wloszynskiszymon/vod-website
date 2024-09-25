import TMDBImage from "@/assets/TMDBImage";
import { SliderShow } from "@/types/types";
import { checkIsNew } from "@/utilities/UtilitiesFunctions";
import Link from "next/link";
import {
  MediaSliderItemBadge,
  MediaSliderItemRoot,
  MediaSliderItemTitle,
} from "./components";

type SliderShowProps = SliderShow & {
  mediaType: "movie" | "tv";
  imageType?: "poster" | "backdrop";
  className?: string;
};

const MediaSliderItem = ({
  className = "",
  id,
  title,
  releaseDate,
  image,
  mediaType,
  imageType = "backdrop",
}: SliderShowProps) => {
  const isNew = checkIsNew(releaseDate);
  return (
    <Link href={`/${mediaType}/${id}`}>
      <MediaSliderItemRoot className={className}>
        <MediaSliderItemTitle>{title}</MediaSliderItemTitle>
        {isNew && (
          <MediaSliderItemBadge imageType={imageType}>NEW</MediaSliderItemBadge>
        )}
        <TMDBImage
          imageType={imageType}
          size="w300"
          src={image}
          className="h-full w-full object-cover group-hover:blur-sm"
          alt={`${title}`}
        />
      </MediaSliderItemRoot>
    </Link>
  );
};

export default MediaSliderItem;
