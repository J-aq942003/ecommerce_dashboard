"use client";
import React, { useEffect, useState } from "react";
import "@/style/components/shared/SideBar/SideBar.css";
import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";
import listSVG from "@/public/assets/svgs/menu-svgrepo-com.svg";
import Image from "next/image";
import { GoStack } from "react-icons/go";
import { FiCalendar, FiLock, FiServer } from "react-icons/fi";
import { CgServer } from "react-icons/cg";
import { TbCategoryPlus } from "react-icons/tb";
import { RiArrowLeftSLine, RiShoppingBasketLine } from "react-icons/ri";
import { FiPieChart } from "react-icons/fi";
import { TiDocumentText } from "react-icons/ti";
import { LuCircleUser } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { BsChatText } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiOutlineMail } from "react-icons/hi";
import { PiTicket } from "react-icons/pi";
import { PiKanban } from "react-icons/pi";
import logoSVG from "@/public/assets/svgs/logo-icon.8af48e89.svg";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SideBarDropDown from "./SideBarDropDown";
import { usePathname } from "next/navigation";
///
const SideBar = () => {
  const pathName = usePathname();
  /* useState */
  // This state is used to manage the open/close state of the sidebar selected tab (dashboard, settings, or services).
  const [isOpen, setIsOpen] = useState({
    dashboard: true,
    settings: false,
    services: false,
  });
  useEffect(() => {
    console.log("pathName: ", pathName);
  });
  return (
    <>
      {/*<Sheet open={open}>*/}
      <Sheet>
        <SheetTrigger className="cursor-pointer hover:bg-blue-100 rounded-full p-1">
          <Image src={listSVG} alt="menu" className="" width={30} height={28} />
        </SheetTrigger>
        <SheetContent side="left" className="z-[999999]">
          <SheetTitle className="">
            <div className="flex items-center gap-1 mt-3 px-4 borderff cursor-pointer w-fit">
              <Image
                src={logoSVG}
                alt="menu"
                className=""
                width={40}
                // height={28}
              />
              <p className="text-xl border border-[transparent] p-0">
                MaterialM
              </p>
            </div>
          </SheetTitle>
          <article className="side-bar-article flex h-full borderff">
            <div className="left-inside-side flex flex-col justify-between py-6 px-4 border-r border-r-gray-300">
              <div className="">
                <div
                  className={`${isOpen.dashboard && "bg-[#bbdefb6e]"}`}
                  onClick={() => {
                    if (!isOpen.dashboard)
                      setIsOpen({
                        dashboard: true,
                        settings: false,
                        services: false,
                      });
                  }}
                >
                  <GoStack
                    className="text-[#2386f7]ff"
                    // style={{ color: "#42a5f5" }}
                  />
                </div>
                <div
                  className={`${isOpen.settings && "bg-[#bbdefb6e]"}`}
                  onClick={() => {
                    if (!isOpen.settings)
                      setIsOpen({
                        dashboard: false,
                        settings: true,
                        services: false,
                      });
                  }}
                >
                  <FiLock />
                </div>
                <div
                  className={`${isOpen.services && "bg-[#bbdefb6e]"}`}
                  onClick={() => {
                    if (!isOpen.services)
                      setIsOpen({
                        dashboard: false,
                        settings: false,
                        services: true,
                      });
                  }}
                >
                  <FiServer />
                </div>
                {/* <TbCategoryPlus />
                <FiPieChart />
                <TiDocumentText />
                <FiPhoneCall />
                <RiShoppingBasketLine />
                <BsChatText />
                <LuCircleUser />
                <LiaFileInvoiceDollarSolid />
                <PiTicket />
                <PiKanban />
                <HiOutlineMail />
                <CgNotes />
                <FiCalendar />*/}
              </div>
              <div>
                <Avatar className="border-2 border-red-500ff my-auto w-8 h-8">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div className="right-inside-side flex flex-col px-3 py-6">
              {/* 1- Main Dashboard Tab In The Sheet */}
              {isOpen.dashboard && (
                <div>
                  <div className="flex flex-col gap-2">
                    <h1 className="borderff font-[500]">Dashboards</h1>
                    <div>
                      <div>
                        <TbCategoryPlus className="text-[20px]" />
                        <p>eCommerce</p>
                      </div>
                      <div>
                        <FiPieChart className="text-[20px]" />
                        <p>Analytics</p>
                      </div>
                      <div>
                        <GoStack className="text-[20px]" />
                        <p>CRM</p>
                      </div>
                      <SideBarDropDown
                        names={[
                          "Homepage",
                          "About Us",
                          "Blog",
                          "Blog Details",
                          "Contact Us",
                          "Portfolio",
                          "Pricing",
                        ]}
                      />
                      <div>
                        <TiDocumentText className="text-[20px]" />
                        <p>Landingpage</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="borderff font-[500]">Apps</h1>
                    <div>
                      <div>
                        <FiPhoneCall className="text-[20px]" />
                        <p>Contacts</p>
                      </div>
                      <SideBarDropDown
                        names={[
                          "Shop",
                          "Details",
                          "List",
                          "Checkout",
                          "Add Product",
                          "Edit Product",
                        ]}
                        title="Ecommerce"
                        icon={<RiShoppingBasketLine className="text-[20px]" />}
                      />
                      <SideBarDropDown
                        names={["Blog Post", "Blog Detail"]}
                        title="Blogs"
                        icon={<TbCategoryPlus className="text-[20px]" />}
                      />
                      <div>
                        <BsChatText className="text-[20px]" />
                        <p>Chats</p>
                      </div>
                      <SideBarDropDown
                        names={["Profile", "Followers", "Friends", "Gallery"]}
                        title="User Profile"
                        icon={<LuCircleUser className="text-[20px]" />}
                      />
                      <SideBarDropDown
                        names={["List", "Details", "Create", "Edit"]}
                        title="Invoice"
                        icon={
                          <LiaFileInvoiceDollarSolid className="text-[20px]" />
                        }
                      />
                      <div>
                        <CgNotes className="text-[20px]" />
                        <p>Notes</p>
                      </div>
                      <div>
                        <FiCalendar className="text-[20px]" />
                        <p>Calendar</p>
                      </div>
                      <div>
                        <HiOutlineMail className="text-[20px]" />
                        <p>Email</p>
                      </div>
                      <div>
                        <PiTicket className="text-[20px]" />
                        <p>Tickets</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 2- Settings Tab In The Sheet */}
              {isOpen.settings && (
                <div className="flex flex-col gap-2 mt-4">
                  <h1 className="borderff font-[500]">Settings</h1>
                  <div>
                    <div>
                      <TbCategoryPlus className="text-[20px]" />
                      <p>Settings</p>
                    </div>
                    <div>
                      <TbCategoryPlus className="text-[20px]" />
                      <p>Services</p>
                    </div>
                    <div>
                      <TbCategoryPlus className="text-[20px]" />
                      <p>Categories</p>
                    </div>
                    <div>
                      <TbCategoryPlus className="text-[20px]" />
                      <p>Products</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </article>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SideBar;
