"use client";
import SearchIcon from "@/assets/icons/SearchIcon";
import { useRouter } from "next/navigation";
import HeaderInput from "./headerinput";

const HeaderSearchInput = () => {
  const router = useRouter();
  return (
    <HeaderInput.Root className="mt-10 max-w-[90vw] ~sm/2xl:~w-[25rem]/[50rem] xl:max-w-[60vw]">
      <HeaderInput.Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          router.push(`/search?q=${e.target.value}`)
        }
        className="lg:text-lg 2xl:text-xl"
      />
      <HeaderInput.Icon>
        <SearchIcon />
      </HeaderInput.Icon>
    </HeaderInput.Root>
  );
};

export default HeaderSearchInput;
