"use client";
import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Delimiter from "@editorjs/delimiter";
import Alert from "editorjs-alert";
import Table from "@editorjs/table";
import CodeTool from "@editorjs/code";
import List from "@editorjs/list";
import Checklist from "@editorjs/checklist";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import { useUser } from "@clerk/nextjs";
import GenerateAITemplate from "./GenerateAITemplate";

function RichDocumentEditor({ params }) {
  const ref = useRef(null); // Initialize ref with null
  let editor;
  let isFetched = false;

  const { user } = useUser();

  const [documentOutput, setDocumentOutput] = useState([]);

  useEffect(() => {
    if (user) {
      InitEditor();
    }
  }, [user]);

  const SaveDocument = () => {
    console.log("UPDATE");
    ref.current.save().then(async (outputData) => {
      const docRef = doc(db, "documentOutput", params?.documentid);

      await updateDoc(docRef, {
        output: outputData,
        editedBy: user?.primaryEmailAddress?.emailAddress,
      });
    });
  };

  const GetDocumentOutput = () => {
    const unsubscribe = onSnapshot(
      doc(db, "documentOutput", params?.documentid),
      (doc) => {
        if (
          doc.data()?.editedBy != user?.primaryEmailAddress?.emailAddress ||
          isFetched == false
        ) {
          doc.data().editedBy && editor?.render(doc.data()?.output);
          isFetched = true;
        }
      }
    );
  };

  const InitEditor = () => {
    if (!editor?.current) {
      editor = new EditorJS({
        onChange: (ao, event) => {
          SaveDocument();
        },
        onReady: () => {
          GetDocumentOutput();
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
      <div className="fixed bottom-10 md:ml-80 left-0 z-10">
        <GenerateAITemplate />
      </div>
    </div>
  );
}

export default RichDocumentEditor;
