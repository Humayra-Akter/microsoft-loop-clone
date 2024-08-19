import CoverPicker from "@/app/_components/CoverPicker";
import EmojiPickerComponent from "@/app/_components/EmojiPickerComponent";
import { SmilePlus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function DocumentInfo() {
  const [coverImage, setCoverImage] = useState("/cover.png");
  const [emoji, setEmoji] = useState();

  return (
    <div>
      {/* cover  */}
      <CoverPicker setNewCover={(v) => setCoverImage(v)}>
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
        <EmojiPickerComponent setEmojiIcon={(v) => setEmoji(v)}>
          <div className="bg-[#ffffb0 p-4 rounded-md">
            {emoji ? (
              <span className="text-5xl">{emoji}</span>
            ) : (
              <SmilePlus className="h-10 w-10 text-gray-500" />
            )}
          </div>
        </EmojiPickerComponent>
      </div>

      {/* file name  */}
      <div className="mt-10 p-10">
        <input
          type="text"
          placeholder="Untitled Document"
          className="font-bold text-4xl outline-none"
          defaultValue={"Untitled Document"}
        />
      </div>
    </div>
  );
}

export default DocumentInfo;
