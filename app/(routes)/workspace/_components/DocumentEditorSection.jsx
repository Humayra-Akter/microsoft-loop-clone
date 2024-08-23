import React, { useState } from "react";
import DocumentHeader from "./DocumentHeader";
import DocumentInfo from "./DocumentInfo";
import RichDocumentEditor from "./RichDocumentEditor";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import CommentBox from "./CommentBox";

function DocumentEditorSection({ params }) {
  const [openComment, setOpenComment] = useState(false);

  return (
    <div>
      {/* header  */}
      <DocumentHeader />

      {/* Document info  */}
      <DocumentInfo params={params} />

      {/* rich text editor  */}
      <RichDocumentEditor params={params} />

      <div className="fixed right-5 bottom-5 z-50">
        <Button onClick={() => setOpenComment(!openComment)}>
          <MessageCircle className="h-4 w-4" />
        </Button>
        {openComment && <CommentBox />}
      </div>
    </div>
  );
}

export default DocumentEditorSection;
