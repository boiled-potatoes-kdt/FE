"use client";

import { forwardRef, useRef, useEffect } from "react";
import Quill, { Delta } from "quill/core";

interface EditorContentProps {
  defaultValue: Delta;
}

const EditorContent = forwardRef<HTMLDivElement, EditorContentProps>(
  ({ defaultValue }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const defaultValueRef = useRef<Delta>(defaultValue);

    useEffect(() => {
      const content = contentRef.current;

      if (!content) {
        return undefined;
      }

      const editorContainer = content.appendChild(
        content.ownerDocument.createElement("div"),
      );
      const quill = new Quill(editorContainer, {
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["image", "code-block"],
          ],
        },
        theme: "snow",
      });

      if (!ref || typeof ref === "function") {
        return undefined;
      }

      ref.current = quill;

      if (defaultValueRef.current) {
        quill.setContents(defaultValueRef.current);
      }

      return () => {
        ref.current = null;
        content.innerHTML = "";
      };
    }, [ref]);

    return <div ref={contentRef} />;
  },
);

EditorContent.displayName = "Editor";

export default EditorContent;
