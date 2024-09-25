import { ButtonGroupProps } from "react-multi-carousel";
import Arrow from "./Arrow";

const ButtonGroup = ({
  next,
  previous,
  goToSlide,
  ...rest
}: ButtonGroupProps) => {
  return (
    <div className="pointer-events-none absolute bottom-1/3 left-0 h-full w-full">
      <Arrow.Left onClick={previous} />
      <Arrow.Right onClick={next} />
    </div>
  );
};

export default ButtonGroup;
