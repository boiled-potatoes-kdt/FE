import ToolbarButton from "../ToolbarButton";
import styles from "./index.module.scss";

interface ToolbarDropdownProps {
  children: React.ReactNode;
}

const ToolbarDropdown = ({ children }: ToolbarDropdownProps) => {
  return (
    <>
      <ToolbarButton>고딕</ToolbarButton>
      {children}
    </>
  );
};

export default ToolbarDropdown;
