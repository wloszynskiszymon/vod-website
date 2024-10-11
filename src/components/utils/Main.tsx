import { cn } from "../../utilities/utils";

type MainProps = React.PropsWithChildren & React.HTMLProps<HTMLDivElement>;
const Main = async ({ children, className = "", ...props }: MainProps) => {
  return (
    <main
      {...props}
      className={cn(
        `${className} bg-gradient-to-r from-neutral-900 via-[rgb(31,41,55)] to-neutral-900`,
      )}
    >
      {children}
    </main>
  );
};

export default Main;
