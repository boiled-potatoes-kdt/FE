"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProfileImgUpload from "@/components/ProfileImgUpload";
import SNSList, { SNSResponse } from "@/components/SNSList";
import Button from "@/components/Button";
import IconDirection from "@/assets/icons/icon-direction-right.svg";
import styles from "./index.module.scss";

interface ProfileBoxInfluencerProps {
  nickname: string;
  profileImageUrl: string;
  snsResponseList: SNSResponse[];
}

const ProfileBoxInfluencer = ({
  nickname,
  profileImageUrl,
  snsResponseList,
}: ProfileBoxInfluencerProps) => {
  const [profileImg, setProfileImg] = useState<File | null>(null);
  const defaultImg = profileImageUrl || "/images/profile-default-mypage.svg";

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
    <section className={styles["profile-container"]}>
      <h3 className="visually-hidden">나의 프로필</h3>
      <div className={styles.profile__img}>
        <ProfileImgUpload
          profileImg={profileImg}
          setProfileImg={setProfileImg}
          defaultImg={defaultImg}
          cameraButon
        />
      </div>
      <div className={styles["name-container"]}>
        <strong>{nickname}</strong>
        {isTablet && (
          <Link href="/mypage/influencer/profile">
            <IconDirection />
          </Link>
        )}
      </div>
      <span className={styles.type}>인플루언서</span>
      <SNSList snsResponseList={snsResponseList} />
      <div className={styles["button-container"]}>
        <Link href="/mypage/influencer/profile">
          <Button type="button" size="large" full>
            회원 정보 변경
          </Button>
        </Link>
        <Button type="button" color="outline--gray" size="large" full>
          로그아웃
        </Button>
      </div>
    </section>
  );
};

export default ProfileBoxInfluencer;
