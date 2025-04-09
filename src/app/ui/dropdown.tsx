'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "@/app/styles/dropdown.css";

export default function Dropdown({
  title,
  Icon,
  description,
}: {
  title: string;
  Icon: any;
  description: string[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  const classname = isOpen
    ? "dropdown-div border border-gray-200 rounded-xl w-4/5 text-center"
    : "dropdown-div  rounded-xl w-4/5 text-center";

  return (
    <div className={classname}>
      <div
        onMouseEnter={open}
        onMouseLeave={close}
        className="relative inline-block text-left rounded-xl transition ease-in duration-300 hover:transform hover:scale-110 hover:z-20  "
      >
        <div className=" flex flex-row items-center justify-center gap-4 p-4">
          {Icon && (
            <div className="z-0 icon-div content-center">
              <Icon className="icon h-9 " />
            </div>
          )}
          <div className="z-0 project-text">
            <h2 className="text-center">{title}</h2>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className=" "
          onMouseEnter={open}
          onMouseLeave={close}
        >
          <ul className="list-disc flex flex-col justify-center align-center items-center px-8 pb-4">
            {description.map((item, index) => (
              <li className="mb-2 w-fit text-center text-lg" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
