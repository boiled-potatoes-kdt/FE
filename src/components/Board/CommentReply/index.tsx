"use client";

import { useState } from "react";
import formatDate from "@/utils/formatDate";
import { CommentItem } from "@/@types/board";
import IconProfile from "@/assets/icons/icon-profile.svg";
import IconDownwardsArrow from "@/assets/icons/icon-downwards-arrow.svg";
import EditDropdown from "../EditDropdown";
import CommentInput from "../CommentInput";
import styles from "../Comment/index.module.scss";

interface CommentProps {
  comment: CommentItem;
  postId: number;
}

const Comment = ({ comment, postId }: CommentProps) => {
  const { id, userName, userProfileImage, content, createdAt } = comment;
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <article className={styles.comment}>
      <figure className={styles.comment__profile}>
        <IconDownwardsArrow viewBox="0 0 36 36" />
      </figure>
      <figure className={styles.comment__profile}>
        {userProfileImage ? (
          <img
            src={userProfileImage}
            width="36px"
            height="36px"
            alt="댓글 작성자 프로필"
            sizes="(max-width: 1024px) 24px, 24px"
          />
        ) : (
          <IconProfile viewBox="0 0 36 36" />
        )}
      </figure>
      <section className={styles.comment__content}>
        <aside className={styles.comment__top}>
          <div className={styles.info}>
            <p className={styles.info__username}>{userName}</p>
            <p className={styles.info__date}>{formatDate(createdAt, "MDMH")}</p>
          </div>
          <EditDropdown
            type="comment"
            commentEdit={() => {
              setIsEdit(true);
            }}
          />
        </aside>
        {isEdit ? (
          <CommentInput postId={postId} id={id.toString()} value={content} />
        ) : (
          <p className={styles.comment__text}>{content}</p>
        )}
      </section>
    </article>
  );
};

export default Comment;
