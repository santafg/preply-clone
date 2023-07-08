import React from "react";
import LogoIcon from "../Icons/LogoIcon";
import {
  ArrowRightCircleIcon,
  ArrowRightOnRectangleIcon,
  ChevronDownIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div
      className=" p-4 px-8 text-white fic justify-between"
      style={{ background: "#192435" }}
    >
      <div className=" fic justify-between gap-6">
        <div className="border-r-2 pr-6">
          <h1 className="text-2xl">LOGO</h1>
        </div>
        <ul className=" fic justify-between text-sm gap-4 font-semibold cursor-pointer">
          <li>Find tutor</li>
          <li>
            Group Classes{" "}
            <span className="bg-pink-500 p-1 py-0.5 rounded-md text-xs">
              NEW
            </span>
          </li>
          <li>Corporate training</li>
          <li>Become a tutor</li>
        </ul>
      </div>
      <div className=" fic justify-between gap-6">
        <div className=" fic justify-between gap-6 border-r-2 pr-6">
          <button className="bg-sky-200 text-green-950 px-4 p-2.5 rounded-xl text-sm">Refer a friend</button>
          <button className="ficc gap-2 hover:text-green-700 ">
            English , USD <ChevronDownIcon className="w-4" />
          </button>
        </div>
        <div className=" fic justify-between gap-4">
          <button className="ficc gap-2">
            <InformationCircleIcon className="w-6" />
          </button>
          <button className="ficc gap-2">
            <ArrowRightOnRectangleIcon className="w-6" /> Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
