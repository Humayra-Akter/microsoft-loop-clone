import React from "react";
import DocumentHeader from "./DocumentHeader";
import DocumentInfo from "./DocumentInfo";

function DocumentEditorSection() {
  return (
    <div>
      {/* header  */}
      <DocumentHeader />

      {/* Document info  */}
      <DocumentInfo />

      {/* rich text editor  */}
    </div>
  );
}

export default DocumentEditorSection;
