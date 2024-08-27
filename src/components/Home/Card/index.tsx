import React from "react";
import Image from "next/image";
import ms from "@/utils/modifierSelector";
import Line from "@/components/Line";
import IconInsta from "@/assets/icons/icon-sns-instargram.svg";
import IconHeartWhite from "@/assets/icons/icon-heart-white.svg";
import IconHeartGray from "@/assets/icons/icon-heart-gray.svg";
import IconPointCoin from "@/assets/icons/icon-point-coin.svg";
import IconBadgeLg from "@/assets/icons/icon-premium-badge-lg.svg";
import IconBadgeMd from "@/assets/icons/icon-premium-badge-md.svg";
import Tag from "@/components/Tag";
import styles from "./index.module.scss";

import testImg from "../../../../public/images/thumb-bg1.jpg";
const cn = ms(styles, "card-wrap");

interface ICardProps {
  type?: "horizontal" | "vertical";
}
const Card: React.FC<ICardProps> = ({ type = "vertical" }) => {
  return (
    <div className={cn(`--${type}`)}>
      <div className={styles["image-content"]}>
        <Image src={testImg} alt="cardImage" />
        {type === "vertical" && (
          <div className={styles["like-info"]}>
            <p>
              100,000
              <span>
                <IconPointCoin />
              </span>
            </p>
            <button type="button">
              <IconHeartWhite />
            </button>
          </div>
        )}
      </div>
      <div className={styles["text-content"]}>
        <div className={styles["text-content__info"]}>
          <h4>
            10일 남음
            {type === "horizontal" && (
              <button>
                <IconHeartGray />
              </button>
            )}
          </h4>
          <h3>[부산/송정] 홀리라운지</h3>
          <p>3만원 식사권(파스타 택1 + 하우스와인(화이트) 1잔 필수주문)</p>
          <p>
            <span>체험기간 : 24년 9월 1일 ~ 10월 1일</span>
          </p>
        </div>
        {type === "vertical" && <Line />}
        <div className={styles["text-content__type"]}>
          <div>
            <IconInsta />
            <Tag>방문형</Tag>
            {type === "horizontal" && (
              <p className={styles["point-info"]}>
                100,000
                <span>
                  <IconPointCoin />
                </span>
              </p>
            )}
          </div>
          <p>
            신청 45<span> / 50명</span>
          </p>
        </div>
      </div>
      <div className={styles["card-badge"]}>
        {type === "vertical" ? <IconBadgeLg /> : <IconBadgeMd />}
      </div>
    </div>
  );
};

export default Card;
