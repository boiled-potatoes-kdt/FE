"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BoardPostResponse } from "@/@types/board";
import PostDivider from "@/components/Board/PostDivider";
import PostTitle from "@/components/Board/PostTitle";
import PostContent from "@/components/Board/PostContent";
import MobileCommentCount from "@/components/Board/MobileCommentCount";
import CommentInput from "@/components/Board/CommentInput";
import Comment from "@/components/Board/Comment";
import MoreCommentsButton from "@/components/Board/MoreCommentsButton";
import PostNavigation from "@/components/Board/PostNavigation";
import MobileTopButton from "@/components/Board/MobileTopButton";
import styles from "./page.module.scss";

const Post = ({ params }: { params: { postId: string } }) => {
  const { data } = useQuery<unknown, unknown, BoardPostResponse>({
    queryKey: ["communities", params.postId],
    queryFn: async () => {
      const response = await axios.get(
        `https://g6-server.dainreview.kr/api/post/communities/${params.postId}`,
        { withCredentials: true },
      );

      return response;
    },
  });

  if (!data) {
    return null;
  }

  const post = data.data;

  return (
    <>
      <PostDivider marginBottom="30px" />
      <section className={styles.post}>
        <PostTitle post={post} />
        <PostContent content={post.content} />
      </section>
      <aside className={styles.comment}>
        <MobileCommentCount count={1} />
        <CommentInput />
        <section>
          <ul>
            <li>
              <Comment
                id={123}
                text="아무래도 블로그를 오래하다보면 자연스럽게 겪는 자가복제(?) 현상인것 같아요ㅠㅠ 저도 매번 다른 말투, 다른 표현을 쓰려 노력하지만 결국 제 스타일을 벗어나기 힘들더라고요ㅎㅎ 그것도 제 블로그의 방향성이라 생각하고, 선정해주시는 업주분들의 니즈라고 생각하고 있어용"
                userId="123"
                userNickname="감자도리"
                date="2024-08-07-13-38"
              />
            </li>
          </ul>
          <MoreCommentsButton />
        </section>
      </aside>
      <PostNavigation
        previous={post.previousPostId}
        next={post.nextPostId}
        list="/communities"
      />
      <MobileTopButton />
    </>
  );
};

export default Post;
