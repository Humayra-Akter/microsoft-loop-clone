"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src={"/logo.png"} width={30} height={30} alt="logo" />
      <Link href="/">
        <h2 className="font-bold text-xl">Loop</h2>
      </Link>
    </div>
  );
}

export default Logo;
