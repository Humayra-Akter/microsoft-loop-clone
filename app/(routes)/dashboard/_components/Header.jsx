"use client";
import React from "react";
import Logo from "../../../_components/Logo";
import { OrganizationSwitcher, useAuth, UserButton } from "@clerk/nextjs";

function Header() {
  const { orgId } = useAuth();
  console.log(orgId);

  return (
    <div className="flex justify-between items-center p-3 shadow-sm">
      <Logo />
      <OrganizationSwitcher
        afterCreateOrganizationUrl={"/dashboard"}
        afterLeaveOrganizationUrl={"/dashboard"}
      />
      <UserButton />
    </div>
  );
}

export default Header;
