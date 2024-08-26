"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import useHeaderStore from "@/store/useHeaderStore";
import titles from "@/data/header_title.json";
import Logo from "@/assets/icons/logo.svg";
import MobileLogo from "@/assets/icons/logo-mobile.svg";
import IconSearch from "@/assets/icons/icon-search.svg";
import IconHamberger from "@/assets/icons/icon-hamburger.svg";
import IconClose from "@/assets/icons/icon-close.svg";
import IconLeft from "@/assets/icons/icon-direction-left.svg";
import Link from "next/link";
import styles from "./index.module.scss";
import UserInfo from "./UserInfo";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const setTitle = useHeaderStore((state) => state.setTitle);
  const title = useHeaderStore((state) => state.title);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  useEffect(() => {
    const handleResize = () => setIsTablet(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTitle(titles[pathname as keyof typeof titles] || "다인 리뷰");
  }, [pathname, setTitle]);

  const isAccountPage = pathname.startsWith("/account");
  const isHomePage = pathname === "/";

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__content}>
          {!isTablet ? (
            <>
              <div className={styles["header__content--left"]}>
                <Link href="/">
                  <Logo />
                </Link>
                <Link href="/">체험단</Link>
                <Link href="/">이용안내</Link>
                <Link href="/announcement">게시판</Link>
              </div>
              <div className={styles["header__content--right"]}>
                <UserInfo />
              </div>
            </>
          ) : (
            <>
              <div className={styles["header__mobile-left"]}>
                {!isHomePage ? (
                  <button onClick={() => router.back()}>
                    <IconLeft />
                  </button>
                ) : (
                  <Link href="/">
                    <MobileLogo />
                  </Link>
                )}
              </div>
              {isAccountPage ? (
                <MobileLogo />
              ) : isHomePage ? null : (
                <p>{title}</p>
              )}

              <ul className={styles["header__mobile-right"]}>
                <li>
                  <Link href="/">
                    <IconSearch />
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    aria-label="hamberger-button"
                    onClick={toggleMenu}
                  >
                    {showMenu ? <IconClose /> : <IconHamberger />}
                  </button>
                </li>
              </ul>
            </>
          )}
        </div>
      </header>
      {isTablet && showMenu && <MobileMenu setShowMenu={setShowMenu} />}
    </>
  );
};

export default Header;
