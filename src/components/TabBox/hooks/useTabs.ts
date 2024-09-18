import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useTabs = (initialValue: string) => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>(
    params?.get("tab") || initialValue,
  );

  useEffect(() => {
    if (!params?.get("tab")) {
      router.replace(`${pathname}?tab=${initialValue}`, { scroll: false });
    }
  }, [activeTab]);

  const handleActiveTabChange = (tab: string) => {
    if (tab === activeTab) return;
    const { pathname } = new URL(window.location.href);
    setActiveTab(tab);
    router.replace(`${pathname}?tab=${tab}`, { scroll: false });
  };

  return [activeTab, handleActiveTabChange] as const;
};

export default useTabs;
