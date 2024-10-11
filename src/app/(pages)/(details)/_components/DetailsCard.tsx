import Card from "@/components/utils/Card";
import { cn } from "@/utilities/utils";
import React from "react";

type DetailsCardProps = React.PropsWithChildren &
  React.HTMLProps<HTMLDivElement>;
const DetailsCard = ({
  children,
  className = "",
  ...props
}: DetailsCardProps) => {
  return (
    <Card
      {...props}
      className={cn(
        `${className} z-10 flex h-[540px] w-5/6 gap-4 overflow-hidden bg-gray-950 md:bg-gray-900`,
      )}
    >
      {children}
    </Card>
  );
};

export default DetailsCard;
