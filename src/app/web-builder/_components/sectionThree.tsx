"use client";
import { Button } from "@/components/ui/button";
import React, { memo } from "react";
import {motion} from 'framer-motion'
import Link from "next/link";
const SectionThree = () => {
  return (
    <div className=" relative  flex items-center gap-4 flex-col justify-center bg-[#0030AD] py-7 px-2">
      <motion.div
         initial={{
            opacity: 0,
            y: -100
        }}
        whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,

            }
        }}
        viewport={{once: true}}
      className=" text-white max-w-[420px] items-center justify-centerw-full gap-3 flex flex-col">
        <h3 className=" font-bold">Editor</h3>
        <h2 className=" md:text-[49px] leading-[104%] text-center text-[24px] font-bold">
          The AI-powered website editor
        </h2>
        <p className=" text-[18px] md:text-[20px] text-center">
          Get your business online in 30 seconds with the #1 AI website builder
          and marketing platform.
        </p>
        <Link href={'/onboarding/industry'} className=" hover:bg-[bg-[rgb(30,30,30)]] bg-white rounded-[8px] text-[#141826] font-bold py-4 px-[28px] w-fit ">
          Generate your website
        </Link>
      </motion.div>
      <div
       
        style={{ backgroundImage: "url('/grid.svg')", backgroundPosition: 'bottom', backgroundRepeat: 'repeat' }}
        className=" w-full max-h-[400px] h-full absolute"
      ></div>
      <div className=" z-10 relative flex items-center flex-col">
        <motion.img
           initial={{
            opacity: 0,
            x: -100
        }}
        whileInView={{
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: 2
            }
        }}
        viewport={{once: true}}
        src="/font.svg" loading="lazy" className=" absolute left-0 top-48 hidden md:block " alt="" />
        <motion.img
           initial={{
            opacity: 0,
            x: -100
        }}
        whileInView={{
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: 3
            }
        }}
        viewport={{once: true}}
        src="/socials.svg" loading="lazy" className=" absolute left-0 top-20 md:block hidden" alt="" />
        <motion.img
          initial={{
            opacity: 0,
            x: 100
        }}
        whileInView={{
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: 4

            }
        }}
        viewport={{once: true}}
        src="/pallete.svg" loading="lazy" className=" absolute right-0 top-[50%] hidden md:block " alt="" />
        <motion.img    initial={{
            opacity: 0,
            y: 100
        }}
        whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            }
        }}
        viewport={{once: true}} src="/sectionThree.svg" loading="lazy" alt="" />
      </div>
    </div>
  );
};

export default memo(SectionThree);
