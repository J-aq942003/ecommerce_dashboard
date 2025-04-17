import React, { useRef, useState } from "react";
import "@/style/components/shared/NavBar/NavBarSecond.css";
import Image from "next/image";
import logoSVG from "@/public/assets/svgs/logo-icon.8af48e89.svg";
import DropDownContainer from "../DropDownContainer";
///
const NavBarSecond = () => {
  //useRef's
  const navSecondRef = useRef<HTMLDivElement>(null);
  //useState's
  // const [open, setOpen] = useState({
  //   notifications: false,
  //   inbox: false,
  //   categories: false,
  //   selectLanguage: false,
  //   avatar: false,
  // });
  const [open, setOpen] = useState({
    notifications: { isOpen: false, positionX: 0 },
    inbox: { isOpen: false, positionX: 0 },
    categories: { isOpen: false, positionX: 0 },
    selectLanguage: { isOpen: false, positionX: 0 },
    avatar: { isOpen: false, positionX: 0 },
  });
  const handleNavLinkClick = (/*e: any*/ id: string, positionX: number) => {
    switch (/*e.target.id*/ id) {
      case "dark-mode-nav-link":
        // Handle dark mode toggle logic here
        break;
      case "notification-nav-link":
        setOpen({
          notifications: {
            isOpen: !open.notifications.isOpen,
            positionX: positionX,
          },
          inbox: { isOpen: false, positionX: 0 },
          categories: { isOpen: false, positionX: 0 },
          selectLanguage: { isOpen: false, positionX: 0 },
          avatar: { isOpen: false, positionX: 0 },
        });
        break;
      case "inbox-nav-link":
        setOpen({
          notifications: { isOpen: false, positionX: 0 },
          inbox: { isOpen: !open.inbox.isOpen, positionX: positionX },
          categories: { isOpen: false, positionX: 0 },
          selectLanguage: { isOpen: false, positionX: 0 },
          avatar: { isOpen: false, positionX: 0 },
        });
        break;
      case "categories-nav-link":
        setOpen({
          notifications: { isOpen: false, positionX: 0 },
          inbox: { isOpen: false, positionX: 0 },
          categories: { isOpen: !open.categories.isOpen, positionX: positionX },
          selectLanguage: { isOpen: false, positionX: 0 },
          avatar: { isOpen: false, positionX: 0 },
        });

        break;
      case "select-language-nav-link":
        setOpen({
          notifications: { isOpen: false, positionX: 0 },
          inbox: { isOpen: false, positionX: 0 },
          categories: { isOpen: false, positionX: 0 },
          selectLanguage: {
            isOpen: !open.selectLanguage.isOpen,
            positionX: positionX,
          },
          avatar: { isOpen: false, positionX: 0 },
        });
        break;
      case "avatar-nav-link":
        setOpen({
          notifications: { isOpen: false, positionX: 0 },
          inbox: { isOpen: false, positionX: 0 },
          categories: { isOpen: false, positionX: 0 },
          selectLanguage: { isOpen: false, positionX: 0 },
          avatar: { isOpen: !open.avatar.isOpen, positionX: positionX },
        });
        break;
      default:
        console.error("Unknown nav link clicked:", /*e.target.id*/ id);
        break;
    }
  };
  return (
    <div
      id="nav-second"
      className="hidden border border-red-400ff px-4ff py-4"
      ref={navSecondRef}
    >
      <div className="border border-black flex justify-around items-center w-[70%] mx-auto">
        <div
          id="dark-mode-nav-link"
          className="hover-btns py-2 px-2 text-center rounded-full"
          onClick={(e) => {
            // console.dir(e);
            // handleNavLinkClick(e);
            handleNavLinkClick("dark-mode-nav-link", e.clientX);
          }}
        >
          <Image src={logoSVG} alt="" width={22} className="" />
        </div>
        <div
          id="notification-nav-link"
          className="hover-btns py-2 px-2 text-center rounded-full"
          onClick={(e) => {
            console.dir(e);
            // handleNavLinkClick(e);
            handleNavLinkClick("notification-nav-link", e.clientX);
          }}
        >
          <Image src={logoSVG} alt="" width={22} className="" />
        </div>
        <div
          id="inbox-nav-link"
          className="hover-btns py-2 px-2 text-center rounded-full"
          onClick={(e) => {
            // console.dir(e);
            // handleNavLinkClick(e);
            handleNavLinkClick("inbox-nav-link", e.clientX);
          }}
        >
          <Image src={logoSVG} alt="" width={22} className="" />
        </div>
        <div
          id="categories-nav-link"
          className="hover-btns py-2 px-2 text-center rounded-full"
          onClick={(e) => {
            // console.dir(e);
            // handleNavLinkClick(e);
            handleNavLinkClick("categories-nav-link", e.clientX);
          }}
        >
          <Image src={logoSVG} alt="" width={22} className="" />
        </div>
        <div
          id="select-language-nav-link"
          className="hover-btns py-2 px-2 text-center rounded-full"
          onClick={(e) => {
            // console.dir(e);
            // handleNavLinkClick(e);
            handleNavLinkClick("select-language-nav-link", e.clientX);
          }}
        >
          <Image src={logoSVG} alt="" width={22} className="z-0" />
        </div>
        <div
          id="avatar-nav-link"
          className="hover-btns py-2 px-2 text-center rounded-full"
          onClick={(e) => {
            // console.dir(e);
            // handleNavLinkClick(e);
            handleNavLinkClick("avatar-nav-link", e.clientX);
          }}
        >
          <Image src={logoSVG} alt="" width={22} className="" />
        </div>
      </div>
      {open.notifications.isOpen && (
        <DropDownContainer
          title="Notifications"
          count={18}
          notifyColor="#3F8EFC"
          positionX={open.notifications.positionX + "px"}
        />
      )}
      {open.inbox.isOpen && (
        <DropDownContainer
          title="Inbox"
          count={7}
          notifyColor="#F0810A"
          positionX={open.inbox.positionX + "px"}
          
        />
      )}
      {/* {open.selectLanguage && <DropDownContainer />}
      {open.notifications && <DropDownContainer />}
      {open.notifications && <DropDownContainer />} */}
    </div>
  );
};

export default NavBarSecond;
