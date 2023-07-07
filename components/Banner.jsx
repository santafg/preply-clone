import React from "react";
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Banner = () => {
  const bannerLinks = ["IELTS", "TOEFL", "Kids", "Pronunciation", "Business"];

  return (
    <div
      className="ficc text-white p-4 sm:p-8 shape"
      style={{ background: "#192435" }}
    >
      <div className="w-full max-w-6xl flex flex-col-reverse sm:grid grid-cols-2 items-center gap-4 sm:gap-8 lg:gap-12">
        <div>
          <h1 className="font-bold text-4xl w-full max-w-sm text-center sm:text-left">
            Unlock your potential with the best{" "}
            <span className="text-blue-green ">language tutors</span>
          </h1>
          <button className="bg-blue-green p-11 py-4 sm:py-5 rounded-xl my-4 w-full sm:w-fit ficc gap-2">
            Get started <ArrowRightIcon className="w-4 text-white " />
            
          </button>

          <ul className="ml-2 fic gap-4 lg:gap-8 font-bold text-sm flex-wrap">
            {bannerLinks.map((bl, i) => (
              <li className="cursor-pointer" key={i}>{bl}</li>
            ))}
          </ul>
        </div>
        <div className="sm:flex justify-end">
          <img src="/images/banner.avif" className="sm:w-11/12" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
