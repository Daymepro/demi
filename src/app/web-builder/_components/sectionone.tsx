"use client"
import React from 'react'
import { memo } from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
const SectionOne = () => {
  return (
    <div   className='  relative  flex flex-col gap-5 items-center'>
        <motion.div
            initial={{ opacity: 0, y: -100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
             className='max-w-[659px] z-20  w-full flex gap-4 items-center flex-col'> 
            <h2 className=' tracking-[-3%] text-[24px] space leading-[104%] lg:text-[49px] text-center font-bold text-white'>
            Build a website in 30 seconds using artificial intelligence

            </h2>

            <p className=' text-[18px] text-center lg:text-[20px] text-[#FFFFFFCC]'>Get your business online in 30 seconds with the 
                #1 AI website buildrer and marketing platform
            </p>
            <Link href={'/onboarding/industry'} className=' bg-[#0030AD] text-white py-4 px-[28px] rounded-[8px] border-2 border-[rgba(255,255,255,0.19)] font-bold'>Get started</Link>
        </motion.div>
    
        <motion.div
            initial={{ opacity: 0,}} 
            animate={{ opacity: 1,}} 
            transition={{ duration: 1 }} 
        style={{
        backgroundImage: "url('/gridBackground.svg')",
        backgroundPosition: "bottom",
        backgroundRepeat: "repeat",
      }} className='  max-h-[800px] h-full w-full bottom-0  absolute'>

        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
        className=' z-10 relative'>
        <div className="absolute rounded-full -top-[70px] max-w-[900px] w-full no-scrollbar -z-[12] h-full max-h-[400px] mx-auto right-0 left-0   bg-[#334d8f] blur-3xl"></div>
            <img src="/builderHero.svg" loading='lazy' alt="" />
        </motion.div>
    </div>
  )
}

export default memo(SectionOne)