import TMDBImage from "@/assets/TMDBImage";
import { SliderShow } from "@/types/types";

import { checkIsNew } from "@/utilities/utils";
import Link from "next/link";
import { PosterBadge, PosterRoot, PosterTitle } from "./components";

type PosterProps = SliderShow & {
  mediaType: "movie" | "tv";
  imageType?: "poster" | "backdrop";
  className?: string;
};

const Poster = ({
  className = "",
  id,
  title,
  releaseDate,
  image,
  mediaType,
  imageType = "backdrop",
}: PosterProps) => {
  const isNew = checkIsNew(releaseDate);
  return (
    <Link href={`/${mediaType}/${id}`}>
      <PosterRoot className={className}>
        <PosterTitle>{title}</PosterTitle>
        {isNew && <PosterBadge imageType={imageType}>NEW</PosterBadge>}
        <TMDBImage
          imageType={imageType}
          size="w300"
          src={image}
          className="h-full w-full object-cover group-hover:blur-sm"
          alt={`${title}`}
        />
      </PosterRoot>
    </Link>
  );
};

export default Poster;
