"use client";
import React from "react";
import SideNav from "../../_components/SideNav";
import DocumentEditorSection from "../../_components/DocumentEditorSection";

function WorkspaceDocument({ params }) {
  return (
    <div>
      {/* side nav  */}
      <div>
        <SideNav params={params} />
      </div>

      {/* Document  */}
      <div className="md:ml-72">
        <DocumentEditorSection />
      </div>
    </div>
  );
}

export default WorkspaceDocument;
