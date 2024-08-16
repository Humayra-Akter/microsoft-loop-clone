"use client";
import Logo from "@/app/_components/Logo";
import { Button } from "@/components/ui/button";
import { db } from "@/config/firebaseConfig";
import {
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { Bell, Loader2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import DocumentList from "./DocumentList";
import uuid4 from "uuid4";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

function SideNav({ params }) {
  const [documentList, setDocumentList] = useState([]);
  const router = useRouter();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    params && GetDocumentList();
  }, [params]);

  const GetDocumentList = () => {
    const q = query(
      collection(db, "workspaceDocuments"),
      where("workspaceId", "==", Number(params?.workspaceid))
    );
    setDocumentList([]);

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setDocumentList((documentList) => [...documentList, doc.data()]);
      });
    });
  };

  const CreateNewDocument = async () => {
    setLoading(true);
    const docId = uuid4();
    await setDoc(doc(db, "workspaceDocuments", docId.toString()), {
      workspaceId: Number(params?.workspaceid),
      createdBy: user?.primaryEmailAddress?.emailAddress,
      coverImage: null,
      emoji: null,
      id: docId,
      documentName: "Untitled Document",
      documentOutput: [],
    });

    setLoading(false);
    router.replace("/workspace/" + params?.workspaceid + "/" + docId);
  };

  return (
    <div className="h-screen md:block md:w-72 fixed p-5 shadow-md bg-blue-50 hidden">
      <div className="flex justify-between items-center">
        <Logo />
        <Bell className="h-5 w-5 text-gray-500" />
      </div>
      <hr className="my-5" />
      <div className="flex justify-between items-center">
        <h2 className="font-medium">Workspace Name </h2>
        <Button size="sm" onClick={CreateNewDocument}>
          {loading ? <Loader2Icon className="h-4 w-4 animate-spin" /> : "+"}
        </Button>
      </div>

      {/* Document List  */}
      <DocumentList documentList={documentList} params={params} />
    </div>
  );
}

export default SideNav;
