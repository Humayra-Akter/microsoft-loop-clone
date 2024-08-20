"use client";
import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";

function RichDocumentEditor() {
  const ref = useRef();
  let editor;

  useEffect(() => {
    InitEditor();
  }, []);

  const InitEditor = () => {
    if (!editor?.current) {
      editor = new EditorJS({
        holder: "editorjs",
        tools: {
          header: Header,
        },
      });
      ref.current = editor;
    }
  };
  return (
    <div className="-ml-60">
      <div id="editorjs"></div>
    </div>
  );
}

export default RichDocumentEditor;
