import React from "react";
import {
  InformationCircleIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

const Tutor = () => {
  return (
    <>
      <div className="ficc p-4 sm:px-8">
        <div className="w-full max-w-7xl flex flex-col-reverse lg:grid grid-cols-12 rounded-md overflow-hidden ">
          <div className="lg:col-span-7 bg-white p-4 sm:p-8 sm:py-12">
            <h1 className="text-3xl tracking-wide font-medium">
              Tutor with Preply
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Earn money sharing your expert knowledge with students. Sign up to
              start tutoring online with Preply.
            </p>
            <ul className="my-4 flex flex-col gap-2">
              <li className="fic gap-2 text-sm">
                <MagnifyingGlassIcon className="w-5 text-blue-green" /> Find new
                students
              </li>
              <li className="fic gap-2 text-sm">
                <CalendarIcon className="w-5 text-blue-green" /> Grow your
                business
              </li>
              <li className="fic gap-2 text-sm">
                <CurrencyDollarIcon className="w-5 text-blue-green" /> Get paid
                securely
              </li>
            </ul>
            <div className="fic flex-wrap gap-6 lg:mt-24">
              <button className="bg-blue-green p-8 py-3 text-white">
                Become a tutor
              </button>
              <button className="text-blue-green ficc gap-2 hidden lg:flex">
                <InformationCircleIcon className="w-6" />
                How our platform works
              </button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/images/tutor_one.webp"
              className="h-full w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tutor;
