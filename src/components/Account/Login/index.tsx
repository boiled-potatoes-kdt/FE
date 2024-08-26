import IconKakao from "@/assets/icons/icon-kakao.svg";
import IconNaver from "@/assets/icons/icon-naver.svg";
import IconGoogle from "@/assets/icons/icon-google.svg";
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from "./index.module.scss";

const Login = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2>로그인</h2>
      </header>
      <form className={styles.form}>
        <Input id="email" type="email" label="이메일" full />
        <Input id="password" type="password" label="비밀번호" full />
        <div className={styles["button-wrapper"]}>
          <Button size="medium" full>
            로그인
          </Button>
        </div>
      </form>
      <ul className={styles["link-container"]}>
        <li>
          <Link href="/account/signup">아이디 찾기</Link>
        </li>
        <li>
          <Link href="/account/login">비밀번호 찾기</Link>
        </li>
      </ul>
      <div className={styles["social-container"]}>
        <h3>소셜계정 로그인</h3>
        <ul className={styles.social__list}>
          <li>
            <Link
              href="/account/signup"
              className={`${styles.social__item} ${styles["social__item-kakao"]}`}
            >
              <IconKakao width="22px" height="23px" />
            </Link>
          </li>
          <li>
            <Link
              href="/account/signup"
              className={`${styles.social__item} ${styles["social__item-naver"]}`}
            >
              <IconNaver width="19px" height="19px" />
            </Link>
          </li>
          <li>
            <Link
              href="/account/signup"
              className={`${styles.social__item} ${styles["social__item-google"]}`}
            >
              <IconGoogle width="30px" height="30px" />
            </Link>
          </li>
        </ul>
      </div>

      <p className={styles["signiup-text"]}>
        아직 회원가입을 안하셨다면? <Link href="/">회원가입하기</Link>
      </p>
    </section>
  );
};

export default Login;
