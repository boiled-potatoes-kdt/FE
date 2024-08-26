import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from "./index.module.scss";

const PasswordFind = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2>비밀번호 찾기</h2>
        <p>가입 시 등록한 이메일, 이름, 전화번호를 입력해주세요.</p>
        {/* Todo 민주: 멘트 수정 */}
      </header>
      <form className={styles.form}>
        <Input id="email" type="email" label="이메일" full />
        <Input id="email" type="text" label="이름" full />
      </form>
      <div className={styles["button-container"]}>
        <Button size="medium" full>
          다음
        </Button>
        <Button size="medium" color="outline" full>
          아이디 찾기
        </Button>
      </div>
    </section>
  );
};

export default PasswordFind;
