import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function WorkspaceItemList({ workspaceList }) {
  const router = useRouter();
  const OnClickWorkspaceItem = (workspaceId) => {
    router.push("/workspace/" + workspaceId);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
      {workspaceList &&
        workspaceList.map((workspace, index) => (
          <div
            key={index}
            onClick={() => {
              OnClickWorkspaceItem(workspace?.id);
            }}
            className="border shadow-xl rounded-xl hover:scale-105 transition-all cursor-pointer"
          >
            <Image
              src={workspace?.coverImage}
              width={400}
              height={200}
              alt="cover"
              className="h-[150px] object-cover rounded-t-xl"
            />
            <div className="p-4 rounded-b-xl">
              <h2 className="flex gap-2">
                {workspace?.emoji}
                {workspace?.workspaceName}
              </h2>
            </div>
          </div>
        ))}
    </div>
  );
}

export default WorkspaceItemList;
