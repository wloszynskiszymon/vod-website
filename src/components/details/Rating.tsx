import Star from "@/public/svgs/star.svg";
import Image from "next/image";

const Rating = ({ rating }: { rating: number }) => {
  return (
    <aside className="flex-center gap-2">
      <p className="text-white">{parseFloat(rating.toFixed(1))}</p>
      <figure className="flex items-center">
        <Image src={Star.src} width={30} height={30} alt="Star" />
      </figure>
    </aside>
  );
};

export default Rating;
