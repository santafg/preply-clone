import React from "react";
import LogoIconTwo from "./Icons/LogoIconTwo";

const StartLearning = () => {
  return (
    <div className="ficc p-4 sm:px-8">
      <div className="w-full max-w-7xl ">
        <div className="h-44 sm:h-64 lg:h-96 ficc overflow-hidden">
            <img src="/images/tutor_two.webp" alt="" />
        </div>
        <div className="ficc text-center w-full bg-white p-4 py-12 sm:p-12 relative">
          <div className="absolute -top-8 bg-white rounded-full w-16 h-16 ficc">
            <LogoIconTwo />
          </div>
          <div className="ficc flex-col max-w-lg gap-6">
            <h1 className="text-3xl tracking-wide font-normal">
              Hundreds of thousands students join us monthly
            </h1>
            <p className="text-gray-600 text-lg">
              …and achieve their learning goals. With our expert tutors, your
              goals are closer than ever!
            </p>
            <button className="bg-blue-green p-16 py-3 text-white">
              Start learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartLearning;
