"use client";
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
import Image from "next/image";
import CoverOption from "../_shared/CoverOption";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

function CoverPicker({ children, setNewCover }) {
  const [selectedCover, setSelectedCover] = useState();

  return (
    <div>
      <Dialog>
        <DialogTrigger className="w-full">{children}</DialogTrigger>
        <DialogContent className="bg-black text-white">
          <DialogHeader>
            <DialogTitle>Update Cover</DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
                {CoverOption.map((cover, index) => (
                  <div
                    onClick={() => {
                      setSelectedCover(cover?.imageUrl);
                    }}
                    className={`${
                      selectedCover == cover?.imageUrl &&
                      "border-2 border-primary"
                    } p-1 rounded-md`}
                    key={index}
                  >
                    <Image
                      src={cover?.imageUrl}
                      alt={`Cover ${index}`}
                      width={200}
                      height={180}
                      className="h-[70px] w-full rounded-md object-cover"
                    />
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="button" onClick={() => setNewCover(selectedCover)}>
                Update
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CoverPicker;
