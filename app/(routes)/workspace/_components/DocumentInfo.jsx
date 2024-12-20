"use client";
import CoverPicker from "@/app/_components/CoverPicker";
import EmojiPickerComponent from "@/app/_components/EmojiPickerComponent";
import { db } from "@/config/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { SmilePlus } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function DocumentInfo({ params }) {
  const [coverImage, setCoverImage] = useState("/cover.png");
  const [emoji, setEmoji] = useState();
  const [documentInfo, setDocumentInfo] = useState();

  useEffect(() => {
    params && GetDocumentInfo();
  }, [params]);

  const GetDocumentInfo = async () => {
    const docRef = doc(db, "workspaceDocuments", params?.documentid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setDocumentInfo(docSnap.data());
      setEmoji(docSnap.data()?.emoji);
      docSnap.data()?.coverImage && setCoverImage(docSnap.data()?.coverImage);
    }
  };

  const updateDocumentInfo = async (key, value) => {
    const docRef = doc(db, "workspaceDocuments", params?.documentid);
    await updateDoc(docRef, {
      [key]: value,
    });
    toast("Document Updated !!!");
  };

  return (
    <div>
      {/* cover  */}
      <CoverPicker
        setNewCover={(v) => {
          setCoverImage(v);
          updateDocumentInfo("coverImage", v);
        }}
      >
        <div className="relative group cursor-pointer">
          <h2 className="hidden absolute p-4 w-full h-full items-center justify-center group-hover:flex">
            Change Cover
          </h2>
          <div className="group-hover:opacity-40">
            <Image
              src={coverImage}
              alt="cover"
              width={400}
              height={400}
              className="w-full h-[200px] object-cover rounded-t-xl"
            />
          </div>
        </div>
      </CoverPicker>

      {/* emoji picker  */}

      <div className="absolute ml-10 mt-[-40px] cursor-pointer">
        <EmojiPickerComponent
          setEmojiIcon={(v) => {
            setEmoji(v), updateDocumentInfo("emoji", v);
          }}
        >
          <div className="bg-[#ffffb0 p-4 rounded-md">
            {emoji ? (
              <span className="text-5xl">{emoji}</span>
            ) : (
              <SmilePlus className="h-10 w-10 text-gray-800" />
            )}
          </div>
        </EmojiPickerComponent>
      </div>

      {/* file name  */}
      <div className="mt-10 p-10">
        <input
          type="text"
          placeholder="Untitled Document"
          className="font-bold text-4xl text-white bg-black"
          defaultValue={documentInfo?.documentName}
          onBlur={(event) =>
            updateDocumentInfo("documentName", event.target.value)
          }
        />
      </div>
    </div>
  );
}

export default DocumentInfo;
