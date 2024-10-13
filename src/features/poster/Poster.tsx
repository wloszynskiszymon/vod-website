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
    <Link aria-hidden={true} href={`/${mediaType}/${id}`}>
      <PosterRoot className={className}>
        <PosterTitle>{title}</PosterTitle>
        {isNew && (
          <PosterBadge className="z-20" imageType={imageType}>
            NEW
          </PosterBadge>
        )}
        <TMDBImage
          imageType={imageType}
          size="w300"
          src={image}
          className="z-10 h-full w-full object-cover group-hover:blur-sm"
          alt={`${title} image`}
        />
        <div className="flex-center absolute h-full w-full animate-pulse bg-gradient-to-t from-cyan-950 to-violet-900"></div>
      </PosterRoot>
    </Link>
  );
};

export default Poster;
