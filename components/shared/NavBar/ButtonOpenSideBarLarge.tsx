"use client";
import React from "react";
import { PiList } from "react-icons/pi";
const ButtonOpenSideBarLarge = () => {
  return (
    <div
      className="cursor-pointer hover:bg-blue-100 rounded-full p-2 text-[22px]"
      onClick={() => {
        document
          .getElementById("side-bar-large-container")
          ?.classList.toggle("transform-[translateX(-100%)]");
        document
          .getElementById("side-bar-large-container")
          ?.classList.toggle("*:w-0");
        document
          .getElementById("side-bar-large-container")
          ?.classList.toggle("*:p-0");
        document
          .getElementById("side-bar-large-container")
          ?.classList.toggle("xl:w-[24rem]");
        document
          .getElementById("side-bar-large-container")
          ?.classList.toggle("overflow-hidden");
      }}
    >
      <PiList />
    </div>
  );
};

export default ButtonOpenSideBarLarge;
