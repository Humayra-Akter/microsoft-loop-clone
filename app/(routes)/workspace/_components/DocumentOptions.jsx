import { Link2Icon, MoreVertical, Pen, Trash2Icon } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function DocumentOptions() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreVertical className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="flex gap-2">
            <Link2Icon className="h-4 w-4" /> Share Link
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2">
            <Pen className="h-4 w-4" /> Rename
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2 text-red-500">
            <Trash2Icon className="h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DocumentOptions;
