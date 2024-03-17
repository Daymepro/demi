"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Monitor } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import { motion } from "framer-motion";

function SectionOne() {
  const styles = {
    backgroundImage: 'url("/images/vector-3.svg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <motion.div
    initial={{ opacity: 0, y: -100 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1 }} 
      className="xl:px-[140px] md:px-10 px-5 flex flex-col h-11/12 lg:min-h-[900px] lg:flex-row items-center lg:pt-0 pt-[72px]"
    >
      <div className="flex-1 flex flex-col gap-6 h-full justify-between lg:pt-0 md:pt-20 py-4 max-h-[500px]">
        <div className="">
          <div className=" text-center lg:text-left">
            <h1 className=" md:text-7xl text-4xl  font-bold mb-4 ">
              AI that builds a website for you.
            </h1>
          </div>
          <div className="mb-10 text-center lg:text-left">
            <span className=" md:text-xl text-base ">
              Get your business online in 30 seconds with the #1 AI website
              builder and marketing platform.
            </span>
          </div>
          <div className=" text-center lg:text-left ">
            <Button className="" size={"custom"} variant={"custom"}>
              Generate your website
            </Button>
          </div>
        </div>
        <Separator className="mt-4 md:hidden" />
        <div className="flex lg:gap-6 gap-4 items-center lg:justify-start justify-center">
          <div className=" flex gap-2 items-center justify-center ">
            <div className="bg-[rgba(226,230,238,0.24)] rounded-full w-9 h-9 flex items-center justify-center">
              <Monitor color="#0330AE" width={15} />
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold">2M+</span>
              <span className="text-sm md:text-base">Website created</span>
            </div>
          </div>

          <div className="text-sm md:text-base text-center font-semibold ">
            BUSINESS <br /> INSIDER
          </div>
          <div>
            <img
              src="/images/forbes-logo.svg"
              className=" md:w-20 w-16"
              alt="forbes logo"
            />
          </div>
        </div>
      </div>
      <div
        style={styles}
        className=" flex-1 lg:pt-32 w-full flex flex-col items-center h-full lg:min-w-[568px] "
      >
        <img src="/images/vector-3.png" alt="landing page image" className="" />
      </div>
    </motion.div>
  );
}

export default SectionOne;
