import Image, { ImageProps } from "next/image";

type TMDBImageProps = ImageProps & {
  mediaType?: "movie" | "tv";
  size:
    | "w45"
    | "w92"
    | "w154"
    | "w185"
    | "w300"
    | "w342"
    | "w500"
    | "w780"
    | "original";
};

// Mapping sizes to their corresponding width and height
const sizeDimensions = {
  w45: { width: 45, height: 25 },
  w92: { width: 92, height: 52 },
  w154: { width: 154, height: 87 },
  w185: { width: 185, height: 104 },
  w300: { width: 300, height: 169 },
  w342: { width: 342, height: 192 },
  w500: { width: 500, height: 281 },
  w780: { width: 780, height: 439 },
};

const TMDBImage: React.FC<TMDBImageProps> = ({ size, src, ...props }) => {
  if (size === "original") {
    return (
      <Image {...props} src={`https://image.tmdb.org/t/p/${size}/${src}`} />
    );
  }

  const { width, height } = sizeDimensions[size];

  return (
    <Image
      {...props}
      src={`https://image.tmdb.org/t/p/${size}/${src}`}
      width={width}
      height={height}
      alt={props.alt || "TMDB Image"}
    />
  );
};

export default TMDBImage;
