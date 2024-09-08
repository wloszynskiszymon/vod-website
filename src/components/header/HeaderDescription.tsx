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
        `${className ? className : ""} text-xl tracking-tighter text-gray-300 md:text-2xl lg:text-3xl`,
      )}
    >
      {children}
    </p>
  );
};

export default HeaderDescription;
