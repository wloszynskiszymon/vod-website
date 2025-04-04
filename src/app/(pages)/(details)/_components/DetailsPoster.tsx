import TMDBImage from "@/assets/TMDBImage";
import { cn } from "@/utilities/utils";
import React from "react";

type DetailsPosterProps = React.PropsWithChildren &
  React.HTMLProps<HTMLDivElement> & { src: string };
const DetailsPoster = ({
  children,
  className = "",
  src,
  ...props
}: DetailsPosterProps) => {
  return (
    <figure
      {...props}
      style={{ backgroundColor: "#eee" }}
      className={cn(
        `${className} md:flex-center mt-12 flex w-1/2 justify-center self-center overflow-hidden rounded-xl border-2 border-gray-700 bg-inherit md:mt-0 md:h-full md:w-auto`,
      )}
    >
      <TMDBImage
        imageType="poster"
        size="w342"
        src={src}
        alt="Poster"
        priority
      />
    </figure>
  );
};

export default DetailsPoster;
