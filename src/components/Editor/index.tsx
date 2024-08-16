"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Toolbar from "./Toolbar";

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
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
  );
};

export default Editor;
