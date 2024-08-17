"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Editor } from "@tiptap/react";
import IconImage from "@/assets/icons/icon-image.svg";
import ToolbarButton from "../ToolbarButton";
import styles from "./index.module.scss";

interface ToolbarImageProps {
  editor: Editor;
}

const ToolbarImage = ({ editor }: ToolbarImageProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<File[]>([]);

  const handleClick = () => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.click();
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || !event.target.files[0]) {
      return;
    }

    const image = event.target.files[0];

    setImages((prev) => [...prev, image]);
  };

  useEffect(() => {
    const latestImage = images[images.length - 1];

    if (!latestImage) {
      return;
    }

    editor.commands.setImage({
      src: window.URL.createObjectURL(latestImage),
    });
  }, [images]);

  return (
    <>
      <ToolbarButton isActive={false} onClick={handleClick}>
        <Image src={IconImage} alt="Icon Image" />
      </ToolbarButton>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleInput(event);
        }}
        className={styles.input}
      />
    </>
  );
};

export default ToolbarImage;
