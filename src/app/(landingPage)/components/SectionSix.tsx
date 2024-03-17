"use client"
import React from 'react'
import {motion} from 'framer-motion'
const SectionSix = () => {
  
  return (
    <div className='xl:px-[140px]  md:px-10 px-5 py-12 flex flex-col items-center justify-center '>
        <div className='flex w-full flex-col md:flex-row  items-center justify-between mt-28 gap-20'>
            <div className='md:w-5/12 w-full flex flex-col gap-4 '>
            <span className=' text-[rgba(0,1,3,0.60)]  2xl:text-lg font-semibold'>CRM</span>
            <h1 className='text-4xl 2xl:text-5xl font-semibold'>Get started with AI Web Hero</h1>
            <p className=' text-[rgba(0,1,3,0.60)] text-sm 2xl:text-base '>grow your business with built-in SEO, automated blogging, ad generation, and review management</p>
            <p className='flex font-bold gap-2 text-ai-button-blue text-sm 2xl:text-base '> Learn more <img src="/images/LearnMoreIcon.svg" alt="" /></p>

            </div>
            <div className='md:w-[50%] w-full relative flex items-center'>
              <motion.div
              initial={{opacity: 0, x: -200}}
              viewport={{ once: true }}
              whileInView={{opacity: 1, x: 0, transition: {duration: 1, delay: 1, }}}
              className='absolute'>
                <img src="/compose.png" alt="" />
              </motion.div>
              <motion.div initial={{opacity: 0, x: -200}}
              viewport={{ once: true }}
              whileInView={{opacity: 1, x: 0, transition: {duration: 1, }}}>
                <img src="/dash.svg" className='w-full' alt="" />

              </motion.div>
            </div>
        </div>
    </div>
  )
}

export default SectionSix