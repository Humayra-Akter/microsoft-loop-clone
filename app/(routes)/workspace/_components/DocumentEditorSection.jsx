import React from "react";
import DocumentHeader from "./DocumentHeader";
import DocumentInfo from "./DocumentInfo";

function DocumentEditorSection({ params }) {
  return (
    <div>
      {/* header  */}
      <DocumentHeader />

      {/* Document info  */}
      <DocumentInfo params={params} />

      {/* rich text editor  */}
    </div>
  );
}

export default DocumentEditorSection;
