import { cn } from "../utilities/utils";

type MainProps = React.PropsWithChildren & React.HTMLProps<HTMLDivElement>;
const Main = ({ children, className = "", ...props }: MainProps) => {
  return (
    <main
      {...props}
      className={cn(
        `${className} flex min-h-[80rem] flex-col gap-14 bg-gradient-to-r from-neutral-900 via-[rgb(31,41,55)] to-neutral-900 py-16`,
      )}
    >
      {children}
    </main>
  );
};

export default Main;
