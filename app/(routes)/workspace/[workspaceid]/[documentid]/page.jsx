"use client";
import React from "react";
import SideNav from "../../_components/SideNav";

function WorkspaceDocument({params}) {
  return (
    <div>
      {/* side nav  */}
      <div>
        <SideNav params={params} />
      </div>

      {/* Document  */}
      <div className="md:ml-72">DOCUMENT</div>
    </div>
  );
}

export default WorkspaceDocument;
