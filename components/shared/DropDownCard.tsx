import Image from "next/image";
import React from "react";
import logoSVG from "@/public/assets/svgs/logo-icon.8af48e89.svg";
import "@/style/components/shared/DropDownCard.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
///
type DropDownCardProps = {
  title: string;
  description: string;
  icon: any;
  date: string;
  avatar?: string;
};
const DropDownCard = (props: DropDownCardProps) => {
  const { title, description, icon, date, avatar } = props;
  return (
    <div className="mainddc flex rounded-sm gap-3 py-3 borderff border-black w-full">
      {avatar ? (
        <div className="relative">
          <p className="absolute right-0 w-2 h-2 bg-green-400 rounded-full"></p>
          <Avatar className="border-2 border-red-500ff my-auto w-11 h-11">
            <AvatarImage src={avatar} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      ) : (
        <div
          className="py-3 px-2.5 rounded-full text-center"
          style={{ backgroundColor: "rgba(255, 204, 213, 0.4)" }}
        >
          <Image src={logoSVG} alt="" width={28} />
        </div>
      )}

      <div className="flex flex-col">
        <p>Event Today</p>
        <p className="borderff">Just a reminder that you have event</p>
      </div>
      <div className="text-nowrap">9:30 AM</div>
    </div>
  );
};

export default DropDownCard;
