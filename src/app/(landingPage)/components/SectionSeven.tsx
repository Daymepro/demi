import React from "react";
import Image from "next/image";

const SectionSeven = () => {
  return (
    <div  className="relative flex flex-col text-center items-center justify-center bg-[#000103] xl:px-[140px] md:px-10 px-0 pt-[106px] overflow-hidden">
      <div className="flex flex-col items-center gap-4">
        <span className="text-lg text-white">Assistant</span>
        <h1 className="  font-bold text-4xl max-w-[620px] text-white">
          The Smartest hire you'll ever make.
        </h1>
        <span className="text-base text-[#FFFFFF]">Save time and automate tedious workflows with the durable AI assistant.</span>
        <div>
        <a href="/" className='flex w-full items-center mx-auto font-bold gap-2 text-white text-sm 2xl:text-base '> Learn more <img src="/images/LearnMoreIconBlack.svg" alt="learn more" /></a>
        </div>

      </div>
      <div className="relative -bottom-40 ">
        <img src="/images/landing_section_7_img.svg" alt="background image" />
      </div>
    </div>
  );
};

export default SectionSeven;
