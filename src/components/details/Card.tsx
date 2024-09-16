import { cn } from "@/utilities/utils";
import React from "react";

type CardProps = React.PropsWithChildren & React.HTMLProps<HTMLDivElement>;
const Card = ({ children, className = "", ...props }: CardProps) => {
  return (
    <div
      {...props}
      className={cn(`${className} relative rounded-xl p-4 shadow-2xl`)}
    >
      {children}
    </div>
  );
};

export default Card;
