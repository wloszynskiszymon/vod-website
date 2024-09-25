import NoImage from "@/public/images/NoImage.jpg";
import { TMDBImageProps, sizeDimensions } from "@/utilities/tmdb-utils";
import Image from "next/image";

// This component will render a TMDB image with the specified size and image type
//  It extends the Next.js Image component by adding a fallback image and handling errors
const TMDBImage: React.FC<TMDBImageProps> = ({
  size,
  src,
  imageType = "backdrop",
  ...props
}) => {
  const tmdbSrc = `https://image.tmdb.org/t/p/${size}/${src}`;
  const dimensions = sizeDimensions[imageType][size];

  return (
    <Image
      {...props}
      src={src ? tmdbSrc : NoImage.src}
      width={dimensions.width}
      height={dimensions.height}
      alt={props.alt || "TMDB Image"}
    />
  );
};

export default TMDBImage;
