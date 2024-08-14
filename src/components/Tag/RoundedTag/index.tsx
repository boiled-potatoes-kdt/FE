import styles from "./index.module.scss";

interface RoundedTagProps {
  color?: "default" | "light-purple" | "dark-gray" | "solid--blue";
  children: React.ReactNode;
}

const RoundedTag = ({ color = "default", children }: RoundedTagProps) => {
  return (
    <div className={`${styles["tag--rounded"]} ${styles[color]}`}>
      {children}
    </div>
  );
};

export default RoundedTag;
