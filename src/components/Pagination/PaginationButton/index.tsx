import ms from "@/utils/modifierSelector";
import styles from "./index.module.scss";

interface PaginationButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
}

const span = ms(styles, "span");

const PaginationButton = ({
  children,
  isActive = false,
}: PaginationButtonProps) => {
  return (
    <button type="button" className={styles.button}>
      {typeof children === "string" ? (
        <span className={span(isActive && "--active")}>{children}</span>
      ) : (
        children
      )}
    </button>
  );
};

export default PaginationButton;
