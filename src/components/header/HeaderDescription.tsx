import { cn } from "../../utilities/utils";

type HeaderDescriptionProps = React.PropsWithChildren &
  React.HTMLProps<HTMLParagraphElement>;

const HeaderDescription: React.FC<HeaderDescriptionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      {...props}
      className={cn(
        `${className ? className : ""} tracking-tighter text-gray-300 md:tracking-tight xl:tracking-normal`,
      )}
    >
      {children}
    </p>
  );
};

export default HeaderDescription;
