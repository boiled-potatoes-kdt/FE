import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from "./index.module.scss";

const IdFind = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2>아이디 찾기</h2>
      </header>
      <form className={styles.form}>
        <Input id="email" type="text" label="이름" full />
      </form>
      <div className={styles["button-container"]}>
        <Button size="medium" full>
          확인
        </Button>
        <Button size="medium" color="outline" full>
          비밀번호 찾기
        </Button>
      </div>
    </section>
  );
};

export default IdFind;
