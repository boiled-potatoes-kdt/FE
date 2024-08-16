import { createElement } from "react";
import ms from "@/utils/modifierSelector";
import styles from "./index.module.scss";

type TagProps = {
  color?:
    | "default"
    | "light-blue"
    | "light-purple"
    | "light-gray"
    | "dark-gray"
    | "outline--gray";
  shape?: "squared" | "rounded";
} & {
  children: React.ReactNode;
};

const cn = ms(styles, "tag");

const Tag = ({
  children,
  color = "default",
  shape = "squared",
  ...props
}: TagProps) =>
  createElement(
    "div",
    {
      className: cn(`--color-${color}`, `--shape-${shape}`),
      ...props,
    },
    children,
  );

export default Tag;
