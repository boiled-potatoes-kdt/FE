"use client";

import { usePathname } from "next/navigation";
import { BOARD_LIST } from "@/@types/board";

const Title = () => {
  const pathname = usePathname();

  return <h3>공지사항</h3>;
};

export default Title;
