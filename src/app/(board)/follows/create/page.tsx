import PostDivider from "@/components/Board/PostDivider";
import CategoryTab from "@/components/CategoryTab";
import TitleInput from "@/components/Board/TitleInput";
import Button from "@/components/Button";
import { CATEGORY_LIST } from "@/@types/board";
import styles from "./page.module.scss";

const FollowsCreate = () => {
  return (
    <>
      <PostDivider marginBottom="20px" />
      <section className={styles.category}>
        <CategoryTab
          tabs={CATEGORY_LIST.follows.map((category) => {
            const { categoryType: id, categoryName: label } = category;
            return { id, label };
          })}
        />
      </section>
      <TitleInput />
      <nav className={styles.control}>
        <Button color="outline">취소</Button>
        <Button>등록</Button>
      </nav>
    </>
  );
};

export default FollowsCreate;
