import React from "react";

function WorkspaceItemList({ workspaceList }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {workspaceList &&
        workspaceList.map((workspace, index) => (
          <div>
            <h2>{workspace?.workspaceName}</h2>
          </div>
        ))}
    </div>
  );
}

export default WorkspaceItemList;
