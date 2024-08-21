"use client";

<<<<<<< HEAD
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import Toolbar from "./Toolbar";
import "./index.scss";

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image.configure({
        allowBase64: true,
        HTMLAttributes: {
          class: "tiptap__image",
        },
      }),
    ],
    autofocus: true,
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </>
=======
// import { useRef } from "react";
// import Quill from "quill";
// import EditorContent from "./EditorContent";

// const Delta = Quill.import("delta");

// const Editor = () => {
//   const quillRef = useRef<HTMLDivElement>(null);

//   return <EditorContent defaultValue={new Delta()} ref={quillRef} />;
// };

// export default Editor;

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const Editor = () => {
  const [content, setContent] = useState("");

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      [{ color: [] }],
      ["bold", "italic", "underline", "strike"],
      ["image"],
      [{ align: [] }],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "image",
    "align",
    "color",
  ];

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };

  return (
    <QuillEditor
      value={content}
      onChange={handleEditorChange}
      modules={quillModules}
      formats={quillFormats}
    />
>>>>>>> 1674048 (feat: 기본적인 React Quill 에디터 생성)
  );
};

export default Editor;
