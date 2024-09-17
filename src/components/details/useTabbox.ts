import { useEffect, useState } from "react";

const useTabbox = () => {
  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    const handleRouteChange = () => {
      const url = new URLSearchParams(window.location.search).get("tab");
      if (url) {
        setActiveTab(url);
      }
    };

    handleRouteChange();

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return { activeTab, setActiveTab };
};

export default useTabbox;
