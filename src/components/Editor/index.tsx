"use client";

import type { Dispatch, SetStateAction } from "react";
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
  ImageResize,
} from "ckeditor5";
import type {
  Editor as EditorType,
  FileLoader,
  UploadAdapter,
  UploadResponse,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";
import "./index.scss";

interface EditorProps {
  initialData?: string;
  placeholder?: string;
  setContent: (content: string) => void;
  setImage: Dispatch<SetStateAction<File[]>>;
}

type DomFileReader = globalThis.FileReader;

class MyUploadAdapter {
  public loader: FileLoader;

  public reader?: DomFileReader;

  constructor(loader: FileLoader) {
    this.loader = loader;
  }

  public upload(): Promise<UploadResponse> {
    return new Promise((resolve, reject) => {
      this.reader = new window.FileReader();
      const { reader } = this;

      reader.addEventListener("load", () => {
        resolve({ default: reader.result });
      });

      reader.addEventListener("error", (error) => {
        reject(error);
      });

      reader.addEventListener("abort", () => {
        reject();
      });

      this.loader.file.then((file) => {
        console.log(file);
        reader.readAsDataURL(file!);
      });
    });
  }
}

const Editor = ({
  initialData,
  placeholder,
  setContent,
  setImage,
}: EditorProps) => {
  const uploadAdapter = (loader: FileLoader) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const reader = new window.FileReader();

          reader.addEventListener("load", () => {
            resolve({ default: reader.result });
          });

          reader.addEventListener("error", (error) => {
            reject(error);
          });

          reader.addEventListener("abort", () => {
            reject();
          });

          loader.file.then((file) => {
            if (!file) {
              return;
            }
            setImage((prev) => [...prev, file]);
            reader.readAsDataURL(file!);
          });
        });
      },
    } as UploadAdapter;
  };

  const MyCustomUploadAdapterPlugin = (editor: EditorType) => {
    // eslint-disable-next-line
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  };

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
        extraPlugins: [MyCustomUploadAdapterPlugin],
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
          ImageResize,
        ],
        image: {
          upload: {
            types: ["png", "jpeg", "jpg"],
          },
        },
        initialData,
        placeholder,
      }}
      onChange={(event, editor) => {
        setContent(editor.getData());
      }}
    />
  );
};

export default Editor;
