import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="text-white fic justify-between p-4"
        style={{ background: "#192435" }}
      >
        <h1 className="text-2xl">LOGO</h1>
        <Bars3Icon
          className="w-6 cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </div>
      <div
        className={`fixed flex flex-col z-50 top-0 right-0 bg-gray-100 h-screen transition-all duration-200 ease-out ${
          open ? "w-60" : "w-0"
        }`}
      >
        <div className="border-b flex justify-end text-gray-400 p-6 py-4">
          <XMarkIcon
            className="w-6 cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <ul className=" flex flex-col  text-sm gap-4 font-semibold cursor-pointer p-6 my-8 text-gray-600">
          <li>Home</li>
          <li>Find tutor</li>
          <li>
            Group Classes{" "}
            <span className="bg-pink-500 p-1 py-0.5 rounded-md text-xs text-white">
              NEW
            </span>
          </li>
          <li>Corporate training</li>
          <li>Become a tutor</li>
          <li>Messages</li>
          <li>Help</li>
          <li>Login</li>
        </ul>

        <div className="flex-1"></div>

        <div className="p-6">
          <div className="fic justify-between gap-2 border rounded-xl mt-4 p-3 py-2  border-gray-300 ">
            <button>English</button> <ChevronDownIcon className="w-4" />
          </div>
          <div className="fic justify-between gap-2 border rounded-xl mt-4 p-3 py-2  border-gray-300 ">
            <button>USD</button> <ChevronDownIcon className="w-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
