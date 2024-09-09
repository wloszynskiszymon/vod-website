// import uniqid from 'uniqid';

import { cn } from "../utilities/utils";

type MainProps = React.PropsWithChildren & React.HTMLProps<HTMLDivElement>;
const Main = ({ children, className, ...props }: MainProps) => {
  return (
    <main
      {...props}
      className={cn(
        `${className ? className : ""} min-h-[80rem] bg-gradient-to-r from-neutral-900 via-[rgb(31,41,55)] to-neutral-900 pb-16 pt-8`,
      )}
    >
      {children}
      {/* <MainCarousel data={data} title={"Test"} /> */}
      {/* {isSuccess &&
        data.map(({ data: mediaData, title }) => (
          <MainCarousel key={'uniqid()'} data={mediaData} title={title} />
        ))} */}
    </main>
  );
};

export default Main;
