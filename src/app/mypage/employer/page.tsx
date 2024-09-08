"use client";

import React, { useEffect, useState } from "react";
import Selectbox, { Option } from "@/components/Selectbox/index";
import CampaignItemEmployer from "@/components/Mypage/Employer/CampaignItem";
import Searchbox from "@/components/Mypage/Searchbox";
// import CampaignEmpty from "@/components/Mypage/CampaignEmpty";
import Link from "next/link";
import Button from "@/components/Button";
import styles from "./page.module.scss";

const campaignItems = [
  {
    id: 1,
    applicationDeadline: 11,
    name: "별이네 커피집",
    region1: "서울",
    region2: "강서구",
    reward: "1만 5천원 체험권 (2인 기준)",
    experienceStartDate: "2024-09-01",
    experienceEndDate: "2024-10-01",
    campaignState: "모집중",
    platform: "",
    type: "방문형",
    applicant: 8,
    capacity: 5,
    label: "다인리뷰",
  },
  {
    id: 2,
    applicationDeadline: 11,
    name: "별이네 커피집",
    region1: "서울",
    region2: "강서구",
    reward: "1만 5천원 체험권 (2인 기준)",
    experienceStartDate: "2024-09-01",
    experienceEndDate: "2024-10-01",
    campaignState: "모집중",
    platform: "",
    type: "방문형",
    applicant: 8,
    capacity: 5,
    label: "다인리뷰",
  },
];

const MypageEmployerPage = () => {
  const [selectedItem1, setSelectedItem1] = useState<Option | null>(null);
  const [selectedItem2, setSelectedItem2] = useState<Option | null>(null);

  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container}>
      {isTablet && <div className={styles.divider} />}
      <section>
        <h3 className={styles["sub-title"]}>체험단 관리</h3>
        <div className={styles["campaign-search"]}>
          <div className={styles["search-inner"]}>
            <div className={styles.search__select}>
              <Selectbox
                placeholder="플랫폼"
                size="medium"
                selected={selectedItem1}
                options={[
                  { optionLabel: "인스타", value: "instagram" },
                  { optionLabel: "블로그", value: "blog" },
                  { optionLabel: "틱톡", value: "tictock" },
                  { optionLabel: "유튜브", value: "youtube" },
                  { optionLabel: "기타", value: "etc" },
                ]}
                onChange={setSelectedItem1}
              />
              <Selectbox
                placeholder="상태"
                size="medium"
                selected={selectedItem2}
                options={[
                  { optionLabel: "모집중", value: "recruitment" },
                  { optionLabel: "모집완료", value: "complete" },
                  { optionLabel: "체험&리뷰", value: "review" },
                  { optionLabel: "리뷰마감", value: "deadline" },
                ]}
                onChange={setSelectedItem2}
              />
            </div>
            <Searchbox />
          </div>
          <Link href="/" className={styles["campaign-button"]}>
            <Button>체험단 등록</Button>
          </Link>
        </div>
        <div className={styles.campaign__list}>
          <CampaignItemEmployer campaignItems={campaignItems} />
          {/* <CampaignEmpty /> */}
        </div>
      </section>
    </div>
  );
};

export default MypageEmployerPage;
