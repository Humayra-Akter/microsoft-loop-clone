"use client";
import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Delimiter from "@editorjs/delimiter";
import Alert from "editorjs-alert";
import Table from "@editorjs/table";
import CodeTool from "@editorjs/code";
import List from "@editorjs/list";
import Checklist from "@editorjs/checklist";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";

function RichDocumentEditor({ params }) {
  const ref = useRef();
  let editor;

  useEffect(() => {
    InitEditor();
  }, []);

  const SaveDocument = () => {
    ref.current.save().then(async (outputData) => {
      console.log(outputData);
      const docRef = doc(db, "documentOutput", params?.documentid);
      await updateDoc(docRef, {
        output: outputData,
      });
    });
  };

  const InitEditor = () => {
    if (!editor?.current) {
      editor = new EditorJS({
        onChange: (ao, event) => {
          SaveDocument();
        },

        holder: "editorjs",
        tools: {
          header: Header,
          delimiter: Delimiter,
          alert: {
            class: Alert,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+A",
            config: {
              alertTypes: [
                "primary",
                "secondary",
                "info",
                "success",
                "warning",
                "danger",
                "light",
                "dark",
              ],
              defaultType: "primary",
              messagePlaceholder: "Enter something",
            },
          },
          table: Table,
          list: {
            class: List,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+L",
            config: {
              defaultStyle: "unordered",
            },
          },
          checklist: {
            class: Checklist,
            shortcut: "CMD+SHIFT+C",
            inlineToolbar: true,
          },
          code: {
            class: CodeTool,
            shortcut: "CMD+SHIFT+P",
          },
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
