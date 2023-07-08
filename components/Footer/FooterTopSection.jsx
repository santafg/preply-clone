import React from "react";

const FooterTopSection = () => {
  const abouts = [
    "Who we are",
    "How it works",
    "Preply reviews",
    "Work at Preply!",
    "Preply Global",
    "Status",
    "Preply Live",
    "Preply Research and Studies",
    "We stand with Ukraine",
    "Media kit",
    "Affiliate program",
  ];

  const students = [
    "Preply Blog",
    "Questions and Answers",
    "Student discount",
    "Referral program",
    "Test your English for free",
    "Test your vocab",
    "Free English courses",
    "Preply discounts",
  ];

  const tutors = [
    "Become an online tutor",
    "Teach English online",
    "Teach French online",
    "Teach Spanish online",
    "Teach German online",
    "See all online tutoring jobs",
  ];

  const companies = [
    "Corporate language training",
    "Corporate English training",
    "Corporate Spanish training",
    "Corporate German training",
    "Corporate French training",
    "Corporate training blog",
    "Resource center",
    "English level test for companies",
  ];

  return (
    <div className="grid lg:grid-cols-4 text-white ">
      <div>
        <h1>ABOUT US</h1>
        <ul className="text-sm flex flex-row flex-wrap lg:flex-col gap-3 lg:gap-1 mt-4 cursor-pointer">
          {abouts.map((a, i) => (
            <li className="hover:underline" key={i}>{a}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>FOR STUDENTS</h1>
        <ul className="text-sm flex flex-row flex-wrap lg:flex-col gap-3 lg:gap-1 mt-4 cursor-pointer">
          {students.map((a, i) => (
            <li className="hover:underline" key={i}>{a}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>FOR TUTORS</h1>
        <ul className="text-sm flex flex-row flex-wrap lg:flex-col gap-3 lg:gap-1 mt-4 cursor-pointer">
          {tutors.map((a, i) => (
            <li className="hover:underline" key={i}>{a}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>FOR COMPANIES</h1>
        <ul className="text-sm flex flex-row flex-wrap lg:flex-col gap-3 lg:gap-1 mt-4 cursor-pointer">
          {companies.map((a, i) => (
            <li className="hover:underline" key={i}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterTopSection;
