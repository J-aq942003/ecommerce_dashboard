import NavBar from "@/components/shared/NavBar/NavBar";
import SideBarLargeDevices from "@/components/shared/SideBar/SideBarLargeDevices";
import React from "react";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="border-2 dark:bg-amber-400f border-black flex flex-row xl:flex-row-reverse relative xl:h-screen">
      <div className="children-div flex flex-col xl:grow border-2ff border-amber-400">
        <NavBar />
        {children}
      </div>
      <div
        id="side-bar-large-container"
        className="hidden duration-300 xl:w-[24rem] border border-red-500f xl:flex flex-col h-full"
      >
        <SideBarLargeDevices />
      </div>
    </section>
  );
};

export default layout;
