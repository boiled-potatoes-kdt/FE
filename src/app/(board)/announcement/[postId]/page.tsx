import { CommunityItemProps } from "@/components/Board/ListItem";
import Title from "@/components/Board/Title";
import Line from "@/components/Line";
import AnnouncementTitle from "@/components/Board/AnnouncementTitle";
import PostContent from "@/components/Board/PostContent";
import mockData from "@/assets/mockData.json";

const Post = async ({ params }: { params: { postId: string } }) => {
  const data = mockData.announcement as CommunityItemProps[];
  const post = data.find((item) => item.id === Number(params.postId));

  if (!post) {
    return null;
  }

  return (
    <>
      <Title boardType="announcement" />
      <Line />
      <AnnouncementTitle post={post} />
      <PostContent content={post.content} />
    </>
  );
};

export default Post;
