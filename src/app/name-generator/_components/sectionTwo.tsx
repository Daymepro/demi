"use client"

import React from 'react'
import {motion} from 'framer-motion'
const SectionTwo = () => {
  return (
    <div className=' flex flex-col gap-14 items-center justify-center px-2 pt-20 bg-[#000103]'>
        <motion.div
          initial={{ opacity: 0, y: -100 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }} 
          viewport={{once: true}}
        className=' flex flex-col items-center justify-center gap-4 max-w-[605px] w-full'>
            <p className=' font-bold text-[#FFFFFFCC]'>Business Name Generator</p>
            <h2 className=' font-bold text-center text-[49px] leading-[104%] text-white'>Weeks of work in minutes</h2>
            <p className=' text-center text-[20px] text-[#FFFFFFB3]'>Dozens of smart blog post that your customers will love instantly for you by AI</p>
            <button className=' w-fit font-semibold bg-white text-[#000103] rounded-[8px] py-4 px-[29px]'>Generate your website</button>
        </motion.div>
        <div className=' flex items-center flex-col md:flex-row gap-4'>
            <div>
            <motion.img   initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.7, delay: 1}} 
            viewport={{once: true}} src="/names-one.svg" alt="" />

            </div>
            <div>
            <motion.img   initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.7, delay: 1.5 }} 
            viewport={{once: true}} src="/names-two.svg" alt="" />

            </div>

        </div>
    </div>
  )
}

export default SectionTwo