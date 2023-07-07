import React from "react";

const Rating = () => {
  return (
    <div className="ficc p-4 sm:px-8">
      <div className="w-full max-w-7xl grid lg:grid-cols-5 gap-4 items-center bg-white p-4 py-7 rounded-xl text-center">
        <div className="hidden lg:block">
          <h1 className="font-bold text-lg ">32,000+</h1>
          <p>Experienced tutors</p>
        </div>
        <div className="hidden lg:block">
          <h1 className="font-bold text-lg ">300,000+</h1>
          <p>5-star tutor reviews</p>
        </div>
        <div>
          <div className="font-bold text-lg">
            <div className="ficc" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="135"
                height="33"
                fill="none"
                viewBox="0 0 135 33"
              >
                <path
                  fill="#F29937"
                  d="m13.615 13.327 3.333-7.334 3.334 7.334 8 .666-6 5.334 1.333 8-6.667-4-7.333 4 2-8-6-5.334 8-.666ZM38.948 13.327l3.334-7.334 3.333 7.334 8 .666-6 5.334 1.333 8-6.666-4-7.334 4 2-8-6-5.334 8-.666ZM64.282 13.327l3.333-7.334 3.333 7.334 8 .666-6 5.334 1.334 8-6.667-4-7.333 4 2-8-6-5.334 8-.666ZM89.615 13.327l3.333-7.334 3.334 7.334 8 .666-6 5.334 1.333 8-6.667-4-7.333 4 2-8-6-5.334 8-.666Z"
                ></path>
                <path
                  fill="#D8DFE6"
                  d="m114.948 13.327 3.334-7.334 3.333 7.334 8 .666-6 5.334 1.333 8-6.666-4-7.334 4 2-8-6-5.334 8-.666Z"
                ></path>
                <path
                  fill="#F29937"
                  d="m114.948 13.326 3.334-7.333 4.718 8V26.498l-4.718-3.172-7.334 4 2-8-6-5.333 8-.667Z"
                ></path>
              </svg>
              <p>4.8</p>
            </div>
          </div>
          <p>on the App Store</p>
        </div>
        <div className="hidden lg:block">
          <h1 className="font-bold text-lg ">120+</h1>
          <p>Subjects taught</p>
        </div>
        <div className="hidden lg:block">
          <h1 className="font-bold text-lg ">200+</h1>
          <p>Tutor nationalities</p>
        </div>

        <div className="grid grid-cols-2 lg:hidden gap-4">
          <div className=" ">
            <h1 className="font-bold text-lg ">32,000+</h1>
            <p>Experienced tutors</p>
          </div>
          <div className=" ">
            <h1 className="font-bold text-lg ">300,000+</h1>
            <p>5-star tutor reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
