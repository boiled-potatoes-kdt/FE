"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Paragraph,
  Undo,
  Underline,
  Strikethrough,
  FontFamily,
  FontSize,
  FontColor,
  Alignment,
  Image,
  ImageUpload,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";
import "./index.scss";

interface EditorProps {
  initialData?: string;
  placeholder?: string;
}

const Editor = ({ initialData, placeholder }: EditorProps) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: [
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "|",
            "fontfamily",
            "fontsize",
            "fontcolor",
            "|",
            "alignment",
            "|",
            "uploadImage",
          ],
        },
        plugins: [
          Essentials,
          Paragraph,
          Undo,
          Bold,
          Italic,
          Underline,
          Strikethrough,
          FontFamily,
          FontSize,
          FontColor,
          Alignment,
          Image,
          ImageUpload,
        ],
        initialData,
        placeholder,
      }}
    />
  );
};

export default Editor;
