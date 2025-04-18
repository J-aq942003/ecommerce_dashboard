"use client";
import DropDownContainer from "@/components/shared/DropDownContainer";
import NavBar from "@/components/shared/NavBar/NavBar";
import NavigationMenuDropDown from "@/components/shared/NavigationMenu";
import SideBarLargeDevices from "@/components/shared/SideBar/SideBarLargeDevices";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col border-2 px-4  border-fuchsia-600">
      <div className="flex border border-black gap-16 py-6">
        <NavigationMenuDropDown />
        <NavigationMenuDropDown />
        <NavigationMenuDropDown />
      </div>
      {/* <DropDownContainer /> */}
    </main>
  );
};

export default page;
