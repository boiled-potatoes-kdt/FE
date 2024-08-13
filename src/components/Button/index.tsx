import styles from "./index.module.scss";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button type="button" className={styles["button--active"]}>
      {children}
    </button>
  );
};

export default Button;
