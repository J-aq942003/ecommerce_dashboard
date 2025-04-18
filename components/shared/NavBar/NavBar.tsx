"use client";
import React, { useState } from "react";
import "@/style/components/shared/NavBar/NavBar.css";
import SideBar from "../SideBar/SideBar";
import Image from "next/image";
import logoSVG from "@/public/assets/svgs/logo-icon.8af48e89.svg";
import NavBarButton from "./NavBarButton";
import NavBarSecond from "./NavBarSecond";
import DropDownContainer from "../DropDownContainer";
import Link from "next/link";
import ButtonOpenSideBarLarge from "./ButtonOpenSideBarLarge";
///
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className="w-screen borderff border-[blue] xl:w-full"
      // style={{ border: "1px solid" }}
    >
      <div className="borderff px-4 py-3 border-black flex justify-between items-center">
        <div className="block xl:hidden">
          <SideBar />
        </div>
        <div className="hidden xl:block">
          <ButtonOpenSideBarLarge />
        </div>
        <Link href="/dashboard" className="borderff">
          <div className="cursor-pointer borderff flex items-center gap-1">
            <Image
              src={logoSVG}
              alt="menu"
              className=""
              width={40}
              height={28}
            />
            <h1 className="text-[1.4rem] font-medium">MaterialM</h1>
          </div>
        </Link>

        <NavBarButton isOpen={isOpen} />
      </div>
      <NavBarSecond />
    </nav>
  );
};

export default NavBar;
