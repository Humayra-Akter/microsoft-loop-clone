import { Button } from "@/components/ui/button";
import { LayoutGrid } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

function GenerateAITemplate() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        variant="outline"
        className="flex gap-2"
        onClick={() => setOpen(!open)}
      >
        <LayoutGrid className="h-4 w-4" /> Generate AI Template
      </Button>
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Generate AI Template</DialogTitle>
            <DialogDescription>
              <label>What you want to write in your document?</label>
              <Input placeholder="Wx. project Idea" />
              <div>
                <Button variant="outline">Cancel</Button>
                <Button>Generate</Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default GenerateAITemplate;
