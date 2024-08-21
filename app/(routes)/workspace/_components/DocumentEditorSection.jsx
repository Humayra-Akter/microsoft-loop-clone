import React from "react";
import DocumentHeader from "./DocumentHeader";
import DocumentInfo from "./DocumentInfo";
import RichDocumentEditor from "./RichDocumentEditor";

function DocumentEditorSection({ params }) {
  return (
    <div>
      {/* header  */}
      <DocumentHeader />

      {/* Document info  */}
      <DocumentInfo params={params} />

      {/* rich text editor  */}
      <RichDocumentEditor params={params} />
    </div>
  );
}

export default DocumentEditorSection;
