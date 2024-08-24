import { Button } from "@/components/ui/button";
import { LayoutGrid, Loader2Icon } from "lucide-react";
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
import { chatSession } from "@/config/GoogleAIModel";

function GenerateAITemplate({ setGenerateAIOutput }) {
  const [open, setOpen] = useState(false);
  const [userInput, setUserInput] = useState();
  const [loading, setLoading] = useState(false);

  const GenerateFromAI = async () => {
    setLoading(true);
    const PROMPT = "Generate template for editor.js in JSON for" + userInput;

    const result = await chatSession.sendMessage(PROMPT);
    const output = JSON.parse(result.response.text());
    setGenerateAIOutput(output);
    setLoading(false);
    setOpen(false);
  };

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
              <h1 className="mb-3">What you want to write in your document?</h1>
              <Input
                placeholder="Wx. project Idea"
                onChange={(event) => setUserInput(event?.target?.value)}
              />
              <div className="mt-5 flex gap-3 justify-end">
                <Button onClick={() => setOpen(false)} variant="outline">
                  Cancel
                </Button>
                <Button
                  disabled={!userInput || loading}
                  onClick={() => GenerateFromAI()}
                >
                  {loading ? (
                    <Loader2Icon className="h-4 w-4 animate-spin" />
                  ) : (
                    "Generate"
                  )}
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default GenerateAITemplate;
