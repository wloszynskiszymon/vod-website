"use client";

import { useRouter, useSearchParams } from "next/navigation";

type TabboxButtonProps = React.PropsWithChildren & {
  tab: string; // Id name to identify tab and display it in the URL
};

const TabboxButton = ({ tab, children }: TabboxButtonProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isActive = searchParams?.get("tab") === tab;

  const handleClick = () => {
    const url = new URLSearchParams(searchParams?.toString());
    url.set("tab", tab);
    router.replace(`${location.pathname}?${url.toString()}`, { scroll: false });
  };

  return (
    <button
      className={`font-bold uppercase ${isActive ? "text-fuchsia-700" : "text-gray-300"} transition duration-300`}
      style={isActive ? { boxShadow: "0 6px rgb(162, 28, 175)" } : {}}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default TabboxButton;
