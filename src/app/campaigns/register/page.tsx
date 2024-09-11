"use client";

import RegisterFormStep from "@/components/Campaigns/RegisterFormStep";
import { useEffect, useState } from "react";

const CampaignRegisterPage = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkIsTablet = () => {
      const width = window.innerWidth;
      setIsTablet(width <= 1024);
    };

    checkIsTablet();

    window.addEventListener("resize", checkIsTablet);

    if (!isTablet) {
      document.body.style.backgroundColor = `var(--gray-10)`;
    } else {
      document.body.style.backgroundColor = "";
    }

    return () => {
      document.body.style.backgroundColor = "";
      window.removeEventListener("resize", checkIsTablet);
    };
  }, [isTablet]);

  return <RegisterFormStep />;
};

export default CampaignRegisterPage;
