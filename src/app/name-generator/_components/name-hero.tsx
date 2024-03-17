"use client"
import React from 'react'
import {motion} from 'framer-motion'
const NameHero = () => {
  return (
    <div className=' flex items-center justify-center flex-col'>
        <motion.div
            initial={{ opacity: 0, y: -100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
        className='max-w-[659px] md:mt-24 mt-14 w-full mx-auto flex flex-col items-center gap-4 '>
        <h1 className=' font-bold text-[49px] leading-[104%] text-[#000103] text-center'>Business name generator for everyone every time!</h1>
        <p className=' text-center text-[20px] text-[#000103B3]'>Generate the perfect business name in seconds with our AI-powered business name generator that analyzes your business details to find creative and memorable options.</p>
        </motion.div>
        <div className=' mt-12'>
            <img src="/name-input.svg" alt="" />
        </div>

       <div className=' md:max-w-[779px] flex flex-col gap-4 w-full'>
        <p className=' font-bold leading-[104%] text-[39px] text-[#000103] mt-24 text-center'>The <span className=' text-ai-button-blue '>AI Web Hero</span>  Business Name Generator for individuals, Organization and more</p>
        <p className=' text-[#000103B3] text-[20px] text-center'>A great business name should help your company stand out and provide a canvas to paint your own meaning on.</p>
       </div>
       <div className=' mt-14 rounded-[13px] h-full bg-[#F9FAFB] flex justify-between items-center md:flex-row flex-col p-7 gap-3 max-w-[1248px] w-full'>
        <motion.div
            initial={{ opacity: 0, y: -100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }} 
            viewport={{once: true}}
        className=' flex flex-col max-w-[273px] gap-3'>
            <img src="/brainstorm.svg" className=' w-9' alt="" />
            <h3 className=' text-[#000103] font-semibold'>Brainstorm ideas</h3>
            <p className='#000103B3'>Lorem ipsum dolor sit amet consectetur. In nisl ullamcorper cursus at justo arcu lobortis integer integer.</p>
        </motion.div>
        <motion.div
           initial={{ opacity: 0, y: 100 }} 
           whileInView={{ opacity: 1, y: 0 }} 
           transition={{ duration: 0.7 ,delay: 1 }} 
           viewport={{once: true}}
        className=' flex flex-col max-w-[273px] gap-3'>
            <img src="/availability.svg" className=' w-9'  alt="" />
            <h3 className=' text-[#000103] font-semibold'>Check availability</h3>
            <p className='#000103B3'>Lorem ipsum dolor sit amet consectetur. In nisl ullamcorper cursus at justo arcu lobortis integer integer.</p>
        </motion.div>
        <motion.div
           initial={{ opacity: 0, y: -100 }} 
           whileInView={{ opacity: 1, y: 0 }} 
           transition={{ duration: 0.7 ,delay: 2 }} 
           viewport={{once: true}}
        className=' flex flex-col max-w-[273px] gap-3'>
            <img src="/brand.svg" className=' w-9' alt="" />
            <h3 className=' text-[#000103] font-semibold'>See more brand assets</h3>
            <p className='#000103B3'>Lorem ipsum dolor sit amet consectetur. In nisl ullamcorper cursus at justo arcu lobortis integer integer.</p>
        </motion.div>
       </div>
        
    </div>
  )
}

export default NameHero