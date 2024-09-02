"use client";

import React from "react";
import Image from "next/image";
import IconHeartGray from "@/assets/icons/icon-heart-gray.svg";
import IconInsta from "@/assets/icons/icon-sns-instargram.svg";
import IconPointCoin from "@/assets/icons/icon-point-coin.svg";
import IconWarning from "@/assets/icons/icon-warning-gray-filled.svg";
import Tag from "@/components/Tag";
// import Calendar from "react-calendar";
import testImg from "../../../public/images/thumb-bg1.jpg";
import styles from "./page.module.scss";

const Products = () => {
  return (
    <div className={styles.products}>
      {/* 좌측 정보 */}
      <section className={styles.products__left}>
        <h2>
          [서울/광진구] 레스트레또 커피
          <button aria-label="like" type="button">
            <IconHeartGray />
          </button>
        </h2>
        <div className={styles["product-summary"]}>
          <span>
            <IconInsta />
          </span>
          <span>REELS</span>
          <span>
            <Tag>방문형</Tag>
          </span>
          <span>
            <Tag color="light-gray">맛집</Tag>
          </span>
          <p className={styles["point-info"]}>
            1,000
            <span>
              <IconPointCoin />
            </span>
          </p>
        </div>

        <div className={styles["product-info-wrap"]}>
          <div className={styles["product-info"]}>
            <div className={styles["product-info__img"]}>
              <Image src={testImg} alt="cardImage" />
            </div>
            <div className={styles["product-info__text"]}>
              <h4>프로젝트 일정</h4>
              <ul>
                <li>
                  <p className={styles["sub-title"]}>모집기간</p>
                  <p>09.20(월) ~ 09.13(금)</p>
                </li>
                <li>
                  <p className={styles["sub-title"]}>신청자 발표</p>
                  <p>09.15(목)</p>
                </li>
                <li>
                  <p className={styles["sub-title"]}>리뷰&체험</p>
                  <p>09.16(월)~9.27(금)</p>
                </li>
                <li>
                  <p className={styles["sub-title"]}>리뷰 마감</p>
                  <p>09.27(금)</p>
                </li>
              </ul>
              <div className={styles.reward}>
                <h4>제공내역</h4>
                <p>
                  3만원 상당 음료 및 디저트 제공 - 음료 2잔(블로거+동반1인) +
                  크로플 1종 / + 5000포인트
                </p>
              </div>
            </div>
          </div>
          <div className={styles["product-notice"]}>
            <span>
              <IconWarning color="#6f717b" width={18} />
            </span>
            방문&체험 후 [플랫폼] 콘텐츠를 올리는 체험단입니다.
          </div>
        </div>
        <div className={styles["product-notice-list"]}>
          <dl>
            <dt>방문・예약 안내</dt>
            <dd>
              <ul>
                <li>
                  <p>
                    <span>체험가능 요일: 화, 수, 목</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>체험 가능 시간 : 오후 7시 ~ 오후 10시</span>
                  </p>
                </li>
                <li>
                  <p>체험 불가능 요일 : 월, 금, 토, 일</p>
                </li>
                <li>
                  <p>방문&체험 후 릴스 콘텐츠를 올리는 체험단입니다.</p>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>주의 사항</dt>
            <dd>
              <ul>
                <li>
                  <p>
                    체험단 미션과 일정을 꼭 확인한 후에 신청해 주세요. 선정된
                    후에 리뷰를 작성하지 않은 경우 페널티가 부과됩니다.
                  </p>
                </li>
                <li>
                  <p>
                    유료 광고 표시(라벨 표시 / 게시글 내 표시)는 필수입니다.
                  </p>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>필수 체크 사항</dt>
            <dd>
              <ul>
                <li>
                  <p>
                    리뷰 미등록 시 서비스 이용료 및 제품에 대한 비용이
                    청구됩니다.
                  </p>
                </li>
                <li>
                  <p>초과 비용은 인플루언서 본인이 부담하여야 합니다.</p>
                </li>
                <li>
                  <p>타쿠폰 및 할인 적용 불가합니다.</p>
                </li>
                <li>
                  <p>예약 후 방문하지 않은 경우 페널티가 부과됩니다.</p>
                </li>
                <li>
                  <p>
                    작성하신 콘텐츠는 의무적으로 6개월간 유지하여야 하며,
                    6개월간 업체 홍보용으로 사용될 수 있습니다.
                  </p>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>태그용 키워드</dt>
            <dd>
              <Tag color="light-gray">커피</Tag>
              <Tag color="light-gray">디저트카페</Tag>
              <Tag color="light-gray">분위기 맛집</Tag>
              <button type="button">
                <Tag shape="rounded">복사</Tag>
              </button>
            </dd>
          </dl>
          <dl>
            <dt>사업주 요청사항</dt>
            <dd>
              <ul>
                <li>
                  <p>태그 등록, 계정 태그</p>
                </li>
                <li>
                  <p>30초 이상 동영상 하나 첨부, 소리 필수</p>
                </li>
                <li>
                  <p>유료 광고 표시</p>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </section>

      {/* 우측 캘린더 */}
      <section className={styles.products__right}>
        <h3>
          모집기간이 <span>9일</span> 남았어요!
        </h3>
        <p>지원 30명 / 30명</p>
        <div className={styles["calendar-wrap"]}>{/* <Calendar /> */}</div>
      </section>
    </div>
  );
};

export default Products;
