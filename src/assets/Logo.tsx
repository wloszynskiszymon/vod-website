import LogoImage from "@/public/images/Logo.png";
import LogoImageWithText from "@/public/images/LogoWithText.png";
import Image, { ImageProps, StaticImageData } from "next/image";

type LogoProps = Omit<ImageProps, "src" | "width" | "height" | "alt"> & {
  withSubtitle?: boolean; // Optional prop to toggle between logo versions
};

const Logo = ({ withSubtitle = false, ...props }: LogoProps) => {
  const selectedImage: StaticImageData = withSubtitle
    ? LogoImageWithText
    : LogoImage;

  return (
    <Image
      {...props}
      width={selectedImage.width}
      height={selectedImage.height}
      src={selectedImage.src}
      blurDataURL={selectedImage.blurDataURL}
      alt="Filmix logo"
    />
  );
};

export default Logo;
