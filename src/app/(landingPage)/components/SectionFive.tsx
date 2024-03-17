"use client";
import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

const SectionFive = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="xl:px-[140px] md:px-10 px-5 py-12 flex flex-col items-center justify-center ">
      <div className="text-center items-center justify-center flex flex-col gap-4">
        <p className="text-[rgba(0,1,3,0.60)] text-xl">About AI Web Hero</p>
        <h1 className="text-4xl font-bold max-w-[578px]">
          Our Mission is to make owning a business easier than having a job
        </h1>
        <p className="text-base text-[rgba(0,1,3,0.60)] ">
          Powerful AI tools to start, grow, and manage your business.
        </p>
      </div>
      <div className="w-full ">
        <div
          ref={ref}
          className="flex w-full items-center flex-col md:flex-row justify-between mt-28 gap-20"
        >
          <motion.div
                initial={{ opacity: 0, transform: "translateY(-100px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)", transition: { duration: 1} }}
                viewport={{ once: true }}
            className="md:w-5/12 w-full md:text-left text-center justify-center flex flex-col gap-4"
          >
            <span className=" text-[rgba(0,1,3,0.60)] font-semibold">
              Marketing
            </span>
            <h1 className="text-4xl 2xl:text-5xl font-semibold">
              The easiest way to drive traffic
            </h1>
            <p className=" text-[rgba(0,1,3,0.60)] text-sm 2xl:text-base ">
              grow your business with built-in SEO, automated blogging, ad
              generation, and review management
            </p>
            {/* <p className="flex font-bold gap-2 text-ai-button-blue text-sm 2xl:text-base ">
              {" "}
              Learn more <img src="/images/LearnMoreIcon.svg" alt="" />
            </p> */}
          </motion.div>
          <motion.div

initial={{ opacity: 0, transform: "translateY(100px)" }}
whileInView={{ opacity: 1, transform: "translateY(0px)", transition: { duration: 1} }}
            className="md:w-7/12 w-full"
            viewport={{ once: true }}
          >
            <img
              src="/images/landing_section_5_img.svg"
              className="w-full"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
