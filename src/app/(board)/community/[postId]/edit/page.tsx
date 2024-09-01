import PostDivider from "@/components/Board/PostDivider";
import CategoryTab from "@/components/CategoryTab";
import TitleInput from "@/components/Board/TitleInput";
import Button from "@/components/Button";
import { CATEGORY_LIST } from "@/@types/board";
import { CommunityItemProps } from "@/components/Board/ListItem";
import mockData from "@/assets/mockData.json";
import styles from "./page.module.scss";

const CommunityEdit = async ({ params }: { params: { postId: string } }) => {
  const data = mockData.community as CommunityItemProps[];
  const post = data.find((item) => item.id === Number(params.postId));

  if (!post) {
    return null;
  }

  return (
    <>
      <PostDivider marginBottom="20px" />
      <section className={styles.category}>
        <CategoryTab
          tabs={CATEGORY_LIST.community.map((category) => {
            const { categoryType: id, categoryName: label } = category;
            return { id, label };
          })}
        />
      </section>
      <TitleInput value={post.title} />
      <nav className={styles.control}>
        <Button color="outline">취소</Button>
        <Button>등록</Button>
      </nav>
    </>
  );
};

export default CommunityEdit;
