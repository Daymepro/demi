"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SectionSeven = () => {
  return (
    <div className=" flex flex-col text-center items-center justify-center bg-[#000103] xl:px-[140px] md:px-10 px-0 pt-[106px] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        className="flex flex-col items-center gap-4"
      >
        <span className="text-lg text-white">Assistant</span>
        <h1 className="  font-bold text-4xl max-w-[620px] text-white">
          The Smartest hire you'll ever make.
        </h1>
        <span className="text-base text-[#FFFFFF]">
          Save time and automate tedious workflows with the durable AI
          assistant.
        </span>
        <div>
          <a
            href="/"
            className="flex w-full items-center mx-auto font-bold gap-2 text-white text-sm 2xl:text-base "
          >
            {" "}
            Learn more{" "}
            <img src="/images/LearnMoreIconBlack.svg" alt="learn more" />
          </a>
        </div>
      </motion.div>
      <div
       
        className="relative  flex items-center -bottom-[40px]"
      >
        <motion.div initial={{ y: 100 }}
        viewport={{ once: true }}
        whileInView={{
          y: 0,
          transition: { duration: 1, delay: 1 },
        }}>
        
        <img src="/ui.svg" alt="background image" />

        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 2 },
          }}
          className=" max-w-[207px] md:max-w-[387px] w-full absolute right-0  rounded-lg z-[30000]  bg-white h-[338px] md:h-[440px] shadow-lg"
        >
          <div className="flex justify-between border-b px-3 py-3">
            <span className='text-[#00000080] font-semibold text-[15px]'>Assistant</span>

            <span  className='text-[#00000080] font-semibold text-[15px]'>X</span>
          </div>
          <div className="flex flex-col px-3 gap-2 py-3">
            <div className="self-end w-[90%] p-2 text-left bg-[#0030AD0D] rounded-md text-[#000000B2] text-sm">
              Write me a job testimony for a graphic design job on brand
              identity
            </div>
            <div className=" bg-ai-button-blue  text-left rounded-md w-[90%] p-2 text-white text-sm">
              Okay i will do just that
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionSeven;
