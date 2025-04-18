import React, { useState } from "react";
import arrowSVG from "@/public/assets/svgs/caret-top-svgrepo-com.svg";
import Image from "next/image";
import "@/style/components/shared/NavBar/NavBarButton.css";
import ListIconButton from "../ListIconButton";
///
const NavBarButton = ({ isOpen }: { isOpen: any }) => {
  const [open, setOpen] = useState(false);
  const handleArrowClick = () => {
    setOpen(!open);
    document.getElementById("nav-second")?.classList.toggle("hidden");
  };
  return (
    <div
      // className={`btn-icon p-2 ${
      //   !open && "transform-[rotate(180deg)]"
      // } hover:bg-blue-100 rounded-full cursor-pointer`}
      className={`btn-icon p-2f mr-2 hover:bg-blue-100f rounded-fullf cursor-pointer`}
      onClick={handleArrowClick}
    >
      {/* <Image
        src={arrowSVG}
        alt="menu"
        className=""
        width={24}
        height={12}
        // onClick={() => setOpen(!open)}
      /> */}
      <ListIconButton />
    </div>
  );
};

export default NavBarButton;
