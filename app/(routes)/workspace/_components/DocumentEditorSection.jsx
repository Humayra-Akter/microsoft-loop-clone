import React, { useState } from "react";
import DocumentHeader from "./DocumentHeader";
import DocumentInfo from "./DocumentInfo";
import RichDocumentEditor from "./RichDocumentEditor";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
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

      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <RichDocumentEditor params={params} />
        </div>
        <div className="fixed right-5 bottom-5">
          <Button onClick={() => setOpenComment(!openComment)}>
            {openComment ? (
              <X className="h-4 w-4" />
            ) : (
              <MessageCircle className="h-4 w-4" />
            )}
          </Button>
          {openComment && <CommentBox />}
        </div>
      </div>
    </div>
  );
}

export default DocumentEditorSection;
