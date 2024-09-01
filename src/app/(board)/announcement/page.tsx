import Search from "@/components/Board/Search";
import PostButton from "@/components/Board/PostButton";
import Line from "@/components/Line";
import { CommunityItemProps } from "@/components/Board/ListItem";
import AnnouncementList from "@/components/Board/AnnouncementList";
import Pagination from "@/components/Pagination";
import mockData from "@/assets/mockData.json";
import styles from "./page.module.scss";

const Board = async ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  const data = mockData.announcement as CommunityItemProps[];

  return (
    <>
      <h2 className={styles.title}>공지사항</h2>
      <section className={styles.control}>
        <nav className={styles.search}>
          <Search />
        </nav>
        <PostButton />
      </section>
      <section className={styles.divider}>
        <Line />
      </section>
      <section className={styles.list}>
        <AnnouncementList
          items={data.slice(
            10 * (Number(searchParams.page || 1) - 1),
            10 * Number(searchParams.page || 1),
          )}
        />
        <Pagination
          pathname="/announcement"
          searchParams={searchParams}
          chunkSize={10}
          totalPages={Math.ceil(data.length / 10)}
        />
      </section>
    </>
  );
};

export default Board;
