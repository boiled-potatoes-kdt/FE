import Image from "next/image";
import { Editor } from "@tiptap/react";
import ms from "@/utils/modifierSelector";
import IconBold from "@/assets/icons/icon-bold.svg";
import ToolbarButton from "./ToolbarButton";
import styles from "./index.module.scss";

interface ToolbarProps {
  editor: Editor;
}

const cn = ms(styles, "nav");

const Toolbar = ({ editor }: ToolbarProps) => {
  return (
    <nav className={cn()}>
      <ul>
        <li>
          <ToolbarButton
            isActive={editor.isActive("bold")}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <Image src={IconBold} alt="Icon Bold" />
          </ToolbarButton>
        </li>
      </ul>
    </nav>
  );
};

export default Toolbar;
