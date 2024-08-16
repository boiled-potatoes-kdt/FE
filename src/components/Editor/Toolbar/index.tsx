import Image from "next/image";
import { Editor } from "@tiptap/react";
import ms from "@/utils/modifierSelector";
import IconBold from "@/assets/icons/icon-bold.svg";
import IconItalic from "@/assets/icons/icon-italic.svg";
import IconUnderline from "@/assets/icons/icon-underline.svg";
import IconStrike from "@/assets/icons/icon-strike.svg";
import ToolbarButton from "./ToolbarButton";
import styles from "./index.module.scss";

const FONT_STYLES = [
  {
    name: "bold",
    icon: IconBold,
    alt: "Icon Bold",
    toggle: (editor: Editor) => editor.chain().focus().toggleBold().run(),
  },
  {
    name: "italic",
    icon: IconItalic,
    alt: "Icon Italic",
    toggle: (editor: Editor) => editor.chain().focus().toggleItalic().run(),
  },
  {
    name: "underline",
    icon: IconUnderline,
    alt: "Icon Underline",
    toggle: (editor: Editor) => editor.chain().focus().toggleUnderline().run(),
  },
  {
    name: "strike",
    icon: IconStrike,
    alt: "Icon Strike",
    toggle: (editor: Editor) => editor.chain().focus().toggleStrike().run(),
  },
];

interface ToolbarProps {
  editor: Editor;
}

const nav = ms(styles, "nav");
const ul = ms(styles, "ul");

const Toolbar = ({ editor }: ToolbarProps) => {
  return (
    <nav className={nav()}>
      <ul className={ul()}>
        {FONT_STYLES.map((style) => (
          <li key={style.name}>
            <ToolbarButton
              isActive={editor.isActive(style.name)}
              onClick={() => style.toggle(editor)}
            >
              <Image src={style.icon} alt={style.alt} />
            </ToolbarButton>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Toolbar;
