"use client";
import React, { useEffect } from "react";
import DropDownCard from "./DropDownCard";
import "@/style/components/shared/DropDownContainer.css";
///

type DropDownContainerProps = {
  title: string;
  notifyColor: string;
  count: number;
  positionX?: string;
};
const DropDownContainer = ({
  title = "None",
  notifyColor = "#3F8EFC",
  count = 0,
  positionX = "0",
}: DropDownContainerProps) => {
  // const [finalPosition, setFinalPosition] = React.useState<string>(positionX);
  console.log("notifyColor: ", notifyColor);
  console.log("positionX: ", positionX);
  useEffect(() => {
    console.log("screenX: ", window.innerWidth);
    // if (window.innerWidth < 767) setFinalPosition("auto");
  }, []);
  return (
    <div
      className="mainddcr flex z-[9999] flex-col bg-white gap-4 rounded-lg shadow-lg mt-10 borderff border-green-500 p-4 w-screen h-[50vh] md:w-[30rem]"
      // style={{ left: finalPosition }}
    >
      <div className="flex w-full justify-between items-center borderff border-black">
        <h1 className="font-[500] text-lg">{title}</h1>
        <h3
          className={`px-2 font-[500] py-0.5 text-sm text-white rounded-full`}
          style={{ backgroundColor: notifyColor }}
        >
          {count} new
        </h3>
      </div>
      <div className="flex flex-col gap-1 overflow-auto">
        <DropDownCard
          date="9:30 AM"
          description=""
          icon=""
          title=""
          key={4}
          avatar={
            title == "Inbox"
              ? "https://0zcn7al3fc.ufs.sh/f/f33x6pcaeYHNewprQQSkcdHl7NtqXLK3YgjPQJ5ZVEW6v1mG"
              : undefined
          }
        />
        <DropDownCard
          date="9:30 AM"
          description=""
          icon=""
          title=""
          key={7}
          avatar={
            title == "Inbox"
              ? "https://0zcn7al3fc.ufs.sh/f/f33x6pcaeYHNewprQQSkcdHl7NtqXLK3YgjPQJ5ZVEW6v1mG"
              : undefined
          }
        />
        <DropDownCard
          date="9:30 AM"
          description=""
          icon=""
          title=""
          key={3}
          avatar={
            title == "Inbox"
              ? "https://0zcn7al3fc.ufs.sh/f/f33x6pcaeYHNewprQQSkcdHl7NtqXLK3YgjPQJ5ZVEW6v1mG"
              : undefined
          }
        />
        <DropDownCard
          date="9:30 AM"
          description=""
          icon=""
          title=""
          key={57}
          avatar={
            title == "Inbox"
              ? "https://0zcn7al3fc.ufs.sh/f/f33x6pcaeYHNewprQQSkcdHl7NtqXLK3YgjPQJ5ZVEW6v1mG"
              : undefined
          }
        />
        <DropDownCard
          date="9:30 AM"
          description=""
          icon=""
          title=""
          key={27}
          avatar={
            title == "Inbox"
              ? "https://0zcn7al3fc.ufs.sh/f/f33x6pcaeYHNewprQQSkcdHl7NtqXLK3YgjPQJ5ZVEW6v1mG"
              : undefined
          }
        />
        <DropDownCard
          date="9:30 AM"
          description=""
          icon=""
          title=""
          key={37}
          avatar={
            title == "Inbox"
              ? "https://0zcn7al3fc.ufs.sh/f/f33x6pcaeYHNewprQQSkcdHl7NtqXLK3YgjPQJ5ZVEW6v1mG"
              : undefined
          }
        />
        <DropDownCard
          date="9:30 AM"
          description=""
          icon=""
          title=""
          key={17}
          avatar={
            title == "Inbox"
              ? "https://0zcn7al3fc.ufs.sh/f/f33x6pcaeYHNewprQQSkcdHl7NtqXLK3YgjPQJ5ZVEW6v1mG"
              : undefined
          }
        />
      </div>
      <button className="w-full mt-auto rounded-full py-2.5 text-[#1e7cff] border border-[#1e7cff]">
        See All Notifications
      </button>
    </div>
  );
};

export default DropDownContainer;
