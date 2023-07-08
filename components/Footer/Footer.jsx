import React from "react";
import FooterTopSection from "./FooterTopSection";

const Footer = () => {
  return (
    <>
      <div className="ficc p-4 sm:p-8 py-12 " style={{backgroundColor : "#384047"}}>
        <div className="w-full max-w-7xl ">
            <FooterTopSection/>
        </div>
      </div>
    </>
  );
};

export default Footer;
