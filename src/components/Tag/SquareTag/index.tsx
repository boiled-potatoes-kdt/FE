import styles from "./index.module.scss";

interface SquareTagProps {
  color?: "default" | "light-blue" | "light-gray" | "dark-gray" | "solid--gray";
  children: React.ReactNode;
}

const SquareTag = ({
  color = "default",

  children,
}: SquareTagProps) => {
  return (
    <div className={`${styles["tag--square"]} ${styles[color]}`}>
      {children}
    </div>
  );
};

export default SquareTag;
