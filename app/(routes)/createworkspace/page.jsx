"use client";
import CoverPicker from "@/app/_components/CoverPicker";
import EmojiPickerComponent from "@/app/_components/EmojiPickerComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/config/firebaseConfig";
import { useAuth, useUser } from "@clerk/nextjs";
import { doc, setDoc } from "firebase/firestore";
import { Loader2Icon, SmilePlus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import uuid4 from "uuid4";

function CreateWorkspace() {
  const [coverImage, setCoverImage] = useState("/cover.png");
  const [workspaceName, setWorkspaceName] = useState();
  const [emoji, setEmoji] = useState();
  const { user } = useUser();
  const { orgId } = useAuth();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const OnCreateWorkspace = async () => {
    setLoading(true);
    const workspaceId = Date.now();
    const result = await setDoc(doc(db, "Workspace", workspaceId.toString()), {
      workspaceName: workspaceName,
      emoji: emoji,
      coverImage: coverImage,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      id: workspaceId,
      orgId: orgId ? orgId : user?.primaryEmailAddress?.emailAddress,
    });

    const docId = uuid4();
    await setDoc(doc(db, "workspaceDocuments", docId.toString()), {
      workspaceId: workspaceId,
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
    router.replace("/workspace/" + workspaceId + "/" + docId);
  };

  return (
    <div className="p-10 md:px-36 lg:px-64 xl:px-96 py-28 bg-black text-white">
      <div className="shadow-lg shadow-white rounded-xl overflow-hidden">
        {/* Cover Image Section */}
        <CoverPicker setNewCover={(v) => setCoverImage(v)}>
          <div className="relative group cursor-pointer">
            <div className="group-hover:opacity-40">
              <Image
                src={coverImage}
                alt="cover"
                width={400}
                height={400}
                className="w-full h-[200px] object-cover"
              />
            </div>
            <h2 className="hidden absolute top-0 left-0 w-full h-full flex items-center justify-center text-xl font-semibold bg-black/60 group-hover:flex">
              Change Cover
            </h2>
          </div>
        </CoverPicker>

        {/* Input Section */}
        <div className="p-8 bg-gradient-to-br from-pitch-800 to-mint-900 rounded-b-xl">
          <h2 className="text-2xl font-bold mb-4">Create a new workspace</h2>
          <p className="text-sm text-gray-300 mb-8">
            A shared space for collaboration with your team. Rename it anytime!
          </p>

          {/* Emoji Picker and Workspace Name */}
          <div className="flex gap-4 items-center">
            <EmojiPickerComponent setEmojiIcon={(v) => setEmoji(v)}>
              <Button variant="outline bg-slate-700">
                {emoji ? emoji : <SmilePlus />}
              </Button>
            </EmojiPickerComponent>
            <Input
              placeholder="Workspace name"
              className="bg-slate-700 text-white"
              onChange={(e) => setWorkspaceName(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-between">
            <Button
              onClick={OnCreateWorkspace}
              disabled={!workspaceName?.length || loading}
              className="relative px-8 py-3 bg-white text-black font-semibold rounded-md"
            >
              Create
              {loading && <Loader2Icon className="animate-spin ml-2" />}
            </Button>

            <Button variant="outline" className="text-gray-500 border-gray-600">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateWorkspace;
