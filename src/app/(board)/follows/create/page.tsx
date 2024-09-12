import PostDivider from "@/components/Board/PostDivider";
import CategoryTab from "@/components/CategoryTab";
import TitleInput from "@/components/Board/TitleInput";
import Editor from "@/components/Editor";
import PostControlButtons from "@/components/Board/PostControlButtons";
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
      <Editor
        setContent={async (content) => {
          "use server";

          console.log(content);
        }}
      />
      <PostControlButtons
        handleClick={async () => {
          "use server";
        }}
      />
    </>
  );
};

export default FollowsCreate;
