"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <div className=" flex items-center px-2 flex-col py-20">
      <motion.div
          initial={{ opacity: 0, y: -100 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
      className=" max-w-[659px] w-full flex flex-col items-center gap-3">
        <p className=" text-center leading-[104%]  font-bold text-[49px] text-[#000103]">
          The AI content builder for small businesses
        </p>
        <p className=" text-center text-[20px] text-[#000103B3]">
          Create your blog and generate dozens of posts in seconds
        </p>
      </motion.div>
      <div className=" mt-20 w-full">
        <img src="/vector-hero.svg" alt="" />
      </div>
      <div className=" flex items-center justify-between w-full">
        <div
          style={{
            backgroundImage: "url('/hero-vector.svg')",
          }}
          className=" w-full "
        >
          <motion.div
              initial={{ opacity: 0, y: 100 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }} 
          className=" flex items-center lg:flex-row flex-col justify-between max-w-[1148px] mx-auto w-full ">
            <div className=" flex flex-col gap-4">
              <img src="/hero-picture-one.png" alt="" className=" rounded-lg" />
              <p className="text-[#000103 ]font-bold text-xs">
                10 trending Men’s Haircuts for the summer session
              </p>
              <svg
                width="78.261719"
                height="6.020065"
                viewBox="0 0 78.2617 6.02007"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <rect
                  id="Rectangle 102"
                  rx="3.010033"
                  width="78.260872"
                  height="6.020067"
                  fill="#E7E7A9"
                  fill-opacity="1.000000"
                />
              </svg>
            </div>
            <div className=" flex flex-col items-center gap-6">
              <div>
                <img src="/inputFrame.svg" alt="" />
              </div>
              <div className=" bg-white rounded-md p-7 flex flex-col gap-4 ">
                <div className="rounded-[8px] bg-[#F8F8FC] max-w-[541px] w-full py-[21px] px-4 flex items-center justify-between">
                  <span className=" font-semibold text-[#14182699]">Top 10 best outdoor photo locations in Vancouver</span>
                  <ArrowRight className=" w-4 h-4 text-ai-button-blue" />
                </div>
                <div className="rounded-[8px] bg-[#F8F8FC] max-w-[541px] w-full py-[21px] px-4 flex items-center justify-between">
                  <span className=" font-semibold text-[#14182699]">Top 10 best outdoor photo locations in Vancouver</span>
                  <ArrowRight className=" w-4 h-4 text-ai-button-blue" />
                </div>
                <div className="rounded-[8px] bg-[#F8F8FC] max-w-[541px] w-full py-[21px] px-4 flex items-center justify-between">
                  <span className=" font-semibold text-[#14182699]">Top 10 best outdoor photo locations in Vancouver</span>
                  <ArrowRight className=" w-4 h-4 text-ai-button-blue" />
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <img src="/hero-picture-two.png" alt="" />
              <p className="text-[#000103 ]font-bold text-xs">
                Top 5 Tips for Home owners when buying interiorts
              </p>
              <svg
                width="78.261719"
                height="6.020067"
                viewBox="0 0 78.2617 6.02007"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <rect
                  id="Rectangle 102"
                  rx="3.010033"
                  width="78.260872"
                  height="6.020067"
                  fill="#D27124"
                  fill-opacity="1.000000"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
