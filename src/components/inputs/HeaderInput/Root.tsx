import { cn } from "../../../utilities/utils";

// Root container for the HeaderInput component
const Root: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(`${className ? className : ""} flex-center group relative`)}
    >
      {children}
    </div>
  );
};

export default Root;
