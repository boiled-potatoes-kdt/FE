"use client";

import React from "react";
import { usePathname } from "next/navigation";
import styles from "./index.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  return (
    <div
      className={`${styles.container} ${isMainPage ? styles["main-page"] : ""}`}
    >
      {children}
    </div>
  );
};

export default Layout;
