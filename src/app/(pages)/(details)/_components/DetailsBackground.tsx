import { cn } from "@/utilities/utils";
import React from "react";

type DetailsBackgroundProps = React.PropsWithChildren &
  React.HTMLProps<HTMLDivElement>;
const DetailsBackground = ({
  children,
  className = "",
  ...props
}: DetailsBackgroundProps) => {
  return (
    <section
      {...props}
      className={cn(
        `${className} flex-center md:bg-gray-900" relative min-h-[30rem] w-full overflow-y-auto md:h-screen`,
      )}
    >
      {children}
    </section>
  );
};

export default DetailsBackground;
