import { ButtonHTMLAttributes, createElement } from "react";
import ms from "@/utils/modifierSelector";
import styles from "./index.module.scss";

type ToolbarButtonProps = {
  children: React.ReactNode;
  isActive: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const cn = ms(styles, "button");

const ToolbarButton = ({
  children,
  isActive = false,
  ...props
}: ToolbarButtonProps) =>
  createElement(
    "button",
    { type: "button", className: cn(isActive && "--active"), ...props },
    children,
  );

export default ToolbarButton;
