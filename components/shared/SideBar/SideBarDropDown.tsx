import React from "react";
import { TiDocumentText } from "react-icons/ti";
import { RiArrowLeftSLine } from "react-icons/ri";
import { LuDot } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
const SideBarDropDown = ({
  names = ["Blog"],
  title = "Front Pages",
  icon = <TiDocumentText className="text-[20px]" />,
}: {
  names: string[];
  title?: string;
  icon?: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="" onClick={() => setIsOpen(!isOpen)}>
        {icon}
        <p>{title}</p>
        <RiArrowLeftSLine
          className={`transform-[rotate(${
            isOpen ? "90deg" : "-90deg"
          })] ml-auto`}
        />
      </div>
      {isOpen && (
        <ul className="flex flex-col gap-1.5 ml-5 borderff border-red-400 my-2 *:text-[#00000093] *:[&:hover]:text-[#42a5f5]">
          {names.map((item, index) => {
            return (
              <li
                className="flex items-center gap-3 cursor-pointer borderff py-1.5"
                key={index}
              >
                <GoDotFill className="text-[12px]" />
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default SideBarDropDown;
