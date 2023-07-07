import React from "react";
import CompassIcon from "./Icons/CompassIcon";
import ShieldIcon from "./Icons/ShieldIcon";

const Works = () => {
  const worksList = [
    {
      title: "Find the best tutor",
      description:
        "Choose from over 32,000 online tutors. Use filters to narrow your search and find the perfect fit",
      img: "tutor",
    },
    {
      title: "Take lessons anytime",
      description:
        "Find the perfect time for your busy schedule. Book lessons in seconds via desktop or mobile",
      img: "time",
    },
    {
      title: "Enter virtual classroom",
      description:
        "When it's lesson time, connect with your tutor through our comprehensive video platform",
      img: "classroom",
    },
    {
      title: "Enjoy structured learning",
      description:
        "Keep track of your learning progress. Improve your speaking and vocabulary with our Learning plans",
      img: "learning",
    },
  ];

  return (
    <div className="ficc p-4 sm:px-8">
      <div className="w-full max-w-7xl relative bg-white py-7 rounded-md text-center">
        <div className="absolute -top-7 left-1/2 -translate-x-1/2">
          <CompassIcon />
        </div>
        <div className="p-4">
          <div className="ficc gap-2 flex-col ">
            <h1 className="font-medium text-4xl mt-2">How Preply works</h1>
            <p className="text-lg tracking-wide text-gray-600">
              Learn online with the world's best tutors
            </p>
          </div>
          <div className="text-center lg:text-left my-6 sm:my-12 flex flex-col gap-4 lg:gap-16">
            {worksList.map((wl, i) => (
              <div
                key={i}
                className="flex flex-col-reverse lg:grid grid-cols-2 items-center gap-4"
              >
                <div className="flex items-center  flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
                  <div className="bg-sky-50 ficc text-xl font-semibold w-12 h-12 rounded-full text-blue-green">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h1 className="text-lg">{wl.title}</h1>
                    <p className="text-sm text-gray-600 mt-1">
                      {wl.description}
                    </p>
                  </div>
                </div>
                <div>
                  <img src={`/images/works/${wl.img}.webp`} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t py-6 mt-8 sm:mt-0 p-4">
          <div className="ficc gap-2 flex-col -mt-16 ">
            <ShieldIcon />
            <h1 className="font-medium text-3xl mt-2">
              100% Satisfaction Guarantee
            </h1>
            <p className="text-lg tracking-wide max-w-lg text-gray-600">
              If you are not satisfied with your trial lesson, we will give you
              a free replacement with another tutor or a full refund
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
