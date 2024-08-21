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
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

function SideNav({ params }) {
  const [documentList, setDocumentList] = useState([]);
  const router = useRouter();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const MAX_FILE = 5;

  useEffect(() => {
    params && GetDocumentList();
  }, [params]);

  const GetDocumentList = () => {
    const q = query(
      collection(db, "workspaceDocuments"),
      where("workspaceId", "==", Number(params?.workspaceid))
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setDocumentList([]);

      querySnapshot.forEach((doc) => {
        setDocumentList((documentList) => [...documentList, doc.data()]);
      });
    });
  };

  const CreateNewDocument = async () => {
    if (documentList?.length >= MAX_FILE) {
      toast("Upgrade to add new file", {
        description:
          "You reach max file, Please upgrad for unlimited file creation",
        action: {
          label: "Upgrade",
          onClick: () => console.log("Undo"),
        },
      });
      return;
    }

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

    await setDoc(doc(db, "documentOutput", docId.toString()), {
      docId: docId,
      output: [],
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

      {/* Progress bar  */}
      <div className="absolute bottom-10 w-[85%]">
        <Progress value={(documentList?.length / MAX_FILE) * 100} />
        <h2 className="text-sm font-light my-2">
          <strong>{documentList?.length}</strong> out of <strong>5</strong>{" "}
          files used
        </h2>
        <h2 className="text-sm font-light my-2">
          Update your plan for unlimited access
        </h2>
      </div>
    </div>
  );
}

export default SideNav;
