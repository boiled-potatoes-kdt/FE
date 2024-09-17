"use client";

import { useState } from "react";
import formatDate from "@/utils/formatDate";
import { CommentItem } from "@/@types/board";
import IconProfile from "@/assets/icons/icon-profile.svg";
import EditDropdown from "../EditDropdown";
import CommentInput from "../CommentInput";
import CommentReply from "../CommentReply";
import styles from "./index.module.scss";

interface CommentProps {
  comment: CommentItem;
  postId: number;
  replies?: CommentItem[];
}

const Comment = ({ comment, postId, replies }: CommentProps) => {
  const { id, userName, userProfileImage, content, createdAt } = comment;
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <>
      <article className={styles.comment}>
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
              <p className={styles.info__date}>
                {formatDate(createdAt, "MDMH")}
              </p>
            </div>
            <EditDropdown
              type="comment"
              commentEdit={() => {
                setIsEdit(true);
              }}
            />
          </aside>
          {isEdit ? (
            <CommentInput
              commentId={id}
              postId={postId}
              id={id.toString()}
              value={content}
            />
          ) : (
            <p className={styles.comment__text}>{content}</p>
          )}
          <button className={styles["reply-button"]} type="button">
            답글 쓰기
          </button>
        </section>
      </article>
      <ul>
        {replies &&
          replies.map((reply) => (
            <li key={reply.id}>
              <CommentReply comment={reply} postId={postId} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Comment;
