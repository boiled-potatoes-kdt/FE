"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BoardResponse } from "@/@types/board";
import createRequestParamsURI from "@/utils/createRequestParamsURI";
import Search from "@/components/Board/Search";
import BoardCategory from "@/components/Board/BoardCategory";
import PostButton from "@/components/Board/PostButton";
import PostDivider from "@/components/Board/PostDivider";
import List from "@/components/Board/List";
import Pagination from "@/components/Pagination";
import styles from "./page.module.scss";

const Board = ({
  searchParams,
}: {
  searchParams: { page: string; category: string; keyword: string };
}) => {
  const { data } = useQuery<unknown, unknown, BoardResponse>({
    queryKey: ["follows"],
    queryFn: () =>
      axios.get(
        `https://g6-server.dainreview.kr/api/post/follows${createRequestParamsURI(searchParams)}`,
        { withCredentials: true },
      ),
  });

  if (!data) {
    return null;
  }

  const { content, totalPages } = data.data;

  return (
    <>
      <section className={styles.control}>
        <nav className={styles.search}>
          <Search pathname="follows" searchParams={searchParams} />
          <BoardCategory
            pathname="follows"
            searchParams={searchParams}
            activeTab={searchParams.category}
          />
        </nav>
        <PostButton href="/follows/create" />
      </section>
      <PostDivider />
      <section className={styles.list}>
        <List items={content} />
        <Pagination
          pathname="/follows"
          searchParams={searchParams}
          chunkSize={10}
          totalPages={totalPages}
        />
      </section>
    </>
  );
};

export default Board;
