import PostDivider from "@/components/Board/PostDivider";
import CategoryTab from "@/components/CategoryTab";
import TitleInput from "@/components/Board/TitleInput";
import Editor from "@/components/Editor";
import PostControlButtons from "@/components/Board/PostControlButtons";
import { CATEGORY_LIST } from "@/@types/board";
import { CommunityItemProps } from "@/components/Board/ListItem";
import mockData from "@/assets/mockData.json";
import styles from "./page.module.scss";

const FollowsEdit = async ({ params }: { params: { postId: string } }) => {
  const data = mockData.follows as CommunityItemProps[];
  const post = data.find((item) => item.id === Number(params.postId));

  if (!post) {
    return null;
  }

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
      <TitleInput value={post.title} />
      <Editor
        initialData={post.content}
        setContent={(content) => {
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

export default FollowsEdit;
