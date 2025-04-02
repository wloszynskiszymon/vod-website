"use client";
import LogoImage from "@/public/images/Logo.png";
import LogoImageWithText from "@/public/images/LogoWithText.png";
import Image, { ImageProps, StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

type LogoProps = Omit<ImageProps, "src" | "width" | "height" | "alt"> & {
  withSubtitle?: boolean; // Optional prop to toggle between logo versions
};

const Logo = ({
  withSubtitle = false,
  className = "",
  ...props
}: LogoProps) => {
  const router = useRouter();
  const selectedImage: StaticImageData = withSubtitle
    ? LogoImageWithText
    : LogoImage;

  return (
    <Image
      {...props}
      className={`${className} cursor-pointer`}
      onClick={() => router.push("/")}
      width={selectedImage.width}
      height={selectedImage.height}
      src={selectedImage.src}
      blurDataURL={selectedImage.blurDataURL}
      alt="Filmix logo"
    />
  );
};

export default Logo;
