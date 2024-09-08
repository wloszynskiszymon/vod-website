import React from "react";
import { cn } from "../../utilities/utils";

type TextImportantProps = React.PropsWithChildren &
  React.HTMLProps<HTMLSpanElement>;

const TextImportant: React.FC<TextImportantProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span {...props} className={cn("font-bold text-purple-500")}>
      {children}
    </span>
  );
};

export default TextImportant;
