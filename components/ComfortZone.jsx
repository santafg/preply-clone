import React from "react";
import GlobeIcon from "./Icons/GlobeIcon";
import CompassIcon from "./Icons/CompassIcon";

const ComfortZone = () => {
  const featureList = [
    {
      title: "Expert tutors",
      description: "Find native speakers and certified private tutors",
    },
    {
      title: "Verified profiles",
      description: "We carefully check and confirm each tutor's profile",
    },
    {
      title: "Learn anytime",
      description:
        "Take online lessons at the perfect time for your busy schedule",
    },
    {
      title: "Affordable prices",
      description: "Choose an experienced tutor that fits your budget",
    },
  ];
  return (
    <>
      <div className="ficc p-4 sm:px-8">
        <div className="w-full max-w-7xl relative bg-white py-7 rounded-md text-center">
          <div className="absolute -top-7 left-1/2 -translate-x-1/2">
            {/* <GlobeIcon /> */}
            <CompassIcon />
          </div>
          <div className="p-4">
            <div className="ficc gap-2 flex-col ">
              <h1 className="font-medium text-3xl mt-2">
                Make the world your comfort zone
              </h1>
              <p className="text-lg tracking-wide text-gray-600">
                Speak naturally with professional online tutors from 185
                countries
              </p>
            </div>
            <div className="grid my-8 lg:grid-cols-4 gap-6">
              {featureList.map((wl, i) => (
                <div
                  key={i}
                  className="flex items-center flex-col  gap-2 "
                >
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComfortZone;
