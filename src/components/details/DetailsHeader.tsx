import { cn } from "@/utilities/utils";
import React from "react";
import Rating from "./Rating";

type DetailsHeaderProps = React.HTMLProps<HTMLDivElement> & {
  title: string;
  rating: number;
  releaseYear: number;
  runtime: string;
  description: string;
};
const DetailsHeader = ({
  className = "",
  title,
  rating,
  releaseYear,
  runtime,
  description,
  ...props
}: DetailsHeaderProps) => {
  return (
    <section {...props} className={cn(`${className} w-full px-1 md:px-4`)}>
      <div className="flex w-full items-center justify-between text-lg font-bold uppercase md:text-2xl lg:text-3xl">
        <h1 className="text-fuchsia-200">{title}</h1>
        <Rating rating={rating} />
      </div>
      <div className="md:text-md flex w-full text-sm text-gray-300 lg:text-lg">
        <p>{[releaseYear, runtime].join(" | ")}</p>
      </div>
      <article className="md:text-md mt-2 text-sm tracking-tight text-gray-400 lg:text-lg">
        {description}
      </article>
    </section>
  );
};

export default DetailsHeader;
