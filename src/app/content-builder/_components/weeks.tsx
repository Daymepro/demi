"use client";
import { motion } from "framer-motion";
import React from "react";

const Weeks = () => {
  return (
    <div className=" bg-[#0D1326] flex flex-col items-center relative py-20 px-2 justify-center gap-3">
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
          }
        }}
        viewport={{once: true}}
      className=" z-10 flex items-center flex-col gap-4">
        <p className=" text-[#FFFFFFCC] font-bold">AI content builder</p>
        <h1 className=" text-white text-[49px] leading-[104%] font-bold">
          Weeks of work in minutes
        </h1>
        <p className=" text-[#FFFFFFB3] text-[20px] leading-[140%]">
          Dozens of smart blog post that your customers will love instantly
          written for you by AI
        </p>
        <button className=" bg-ai-button-blue text-white font-semibold text-sm py-4 px-6 w-fit rounded-[8px]">
          Generate your website
        </button>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.7,
          }
        }}
        viewport={{once: true}}
        style={{
          backgroundImage: "url('/grid.svg')",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
        className="  max-h-[800px] absolute h-full -top-5 w-full"
      ></motion.div>
      <div className=" relative flex">
        <motion.img
         initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1,
            duration: 0.7,
          }
        }}
        viewport={{once: true}}
        src="/weekImage.svg" alt="" />
        <motion.img
        initial={{
          opacity: 0,
          x: -200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 2,
            duration: 0.7,
          }
        }}
        viewport={{once: true}}
        src="/tipsImage.svg" className=" absolute -left-5" alt="" />
        <motion.img
         initial={{
          opacity: 0,
          x: 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 3,
            duration: 0.7,
          }
        }}
        viewport={{once: true}}
        src="/tipsImage-two.svg" alt="" className=" absolute -right-8" />
        
      </div>
    </div>
  );
};

export default Weeks;
