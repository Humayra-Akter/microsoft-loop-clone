"use client";
import Logo from "@/app/_components/Logo";
import { Button } from "@/components/ui/button";
import { db } from "@/config/firebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Bell } from "lucide-react";
import React, { useEffect } from "react";

function SideNav({ params }) {
  useEffect(() => {
    params && GetDocumentList();
  }, [params]);

  const GetDocumentList = () => {
    const q = query(
      collection(db, "workspaceDocuments"),
      where("workspaceId", "==", Number(params?.workspaceid))
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    });
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
        <Button size="sm">+</Button>
      </div>
    </div>
  );
}

export default SideNav;
