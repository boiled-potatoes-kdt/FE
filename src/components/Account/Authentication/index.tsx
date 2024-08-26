import IconAuthList from "@/assets/icons/icon-auth-list.svg";
import IconDirectionRight from "@/assets/icons/icon-direction-right-blue.svg";
import Button from "@/components/Button";
import styles from "./index.module.scss";

const Authentication = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contents}>
        <h2>간편인증</h2>
        <p>
          네이버 / 카카오 / KB모바일 / 페이코 / PASS / 삼성패스 / TOSS / 신한 /
          금융인증서를 이용하여 로그인 할 수 있습니다.
        </p>
        <IconAuthList />
      </div>
      <div className={styles["button-wrapper"]}>
        <Button size="medium" color="outline" full>
          간편인증 하러가기
          <IconDirectionRight />
        </Button>
      </div>
    </section>
  );
};

export default Authentication;
