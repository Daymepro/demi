"use client";
import React, { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { Variants, motion, useAnimation, useAnimationControls, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
const SectionThree = () => {
  const main = useRef<HTMLDivElement>(null);

  const isInView = useInView(main, {once: true});

  
  const style = {
    backgroundImage:
      'url("/images/landing-section3-grid.svg"), url("/images/landing-section3-grid.svg")',
    backgroundPosition: "-7% 100%, 107% 100%",
    // backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const style2 = {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    filter: "blur(60px)",
  };

  return (
    <div
      className="relative flex flex-col h-fit md:h-screen items-center justify-center bg-main-blue xl:px-[140px] md:px-10 px-0 pt-[106px] overflow-hidden"
    >
      <div className=" text-center font-bold text-5xl max-w-[400px] text-white">
        The AI-Powered Website Editor
      </div>
      <div ref={main}>
      <motion.div
        initial='visible'
        animate={{
          scale: isInView ? 0.5 : 1
        }}
        variants={{
          visible: { scale: 1 },
          hidden: { scale: 0.5 }
        }}
        transition={{ duration: 1 }}
        className="mt-[85px] z-20 relative"
      >
        <motion.img
          loading="lazy"
          src="/images/landing-section3.png"
          alt="background image"
          className=" w-full"
        />

        <motion.img
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
 
          loading="lazy"
          
          className="  absolute left-0 right-0 w-full  z-[30] top-0 "
          src="/bar.png "
          alt="background image"
         
        />
      </motion.div>

      </div>
      <div
        style={style}
        className="z-10 absolute max-w-[1100px] h-5/6 w-11/12"
      ></div>
      <div
        style={style2}
        className="absolute top-48 max-w-[1100px] h-5/6 w-11/12"
      ></div>
      <div></div>
    </div>
  );
};

export default SectionThree;
