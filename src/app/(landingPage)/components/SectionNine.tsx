"use client"
import { Button } from '@/components/ui/button'
import { Zap } from 'lucide-react'
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

const SectionNine = () => {
  return (
    <div className=' overflow-hidden'>
    <motion.div
    initial={{opacity: 0,  x: 200 }}
          viewport={{ once: true }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.4},
            animation: 'ease'
          }}
    className='xl:mx-[140px] gap-x-32 bg-[#0030AD] rounded-3xl  md:mx-10 mx-5 px-10 mb-24 flex flex-col sm:flex-row-reverse items-center  justify-between '>
        <motion.div className='w-5/12 max-w-[500px]' 
        initial={{ opacity: 0, y: -200 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 2 },
          }}>
            <img src=" /images/landing_section_9_1_img.svg" alt="" />
        </motion.div>
        <motion.div
        initial={{ opacity: 0,  y: 200 }}
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 2.5 }, 
        }}
         className='flex flex-col justify-center w-full md:w-7/12 items-start gap-3'>

            <h1 className='text-4xl font-bold text-white text-center'>Try AIWeb Hero for free today</h1>
            <span className='md:text-[20px] text-base text-center text-white '>AI Web Hero's mission is to make website creation more accessible than ever, thanks to artificial intelligence. Become the hero of your own website with AIWebHero!</span>
            <Link href={'/onboarding/industry'}  className='mt-6 mb-3 md:mb-0 px-4  flex rounded-[8px] py-3  bg-white text-black items-center justify-center mx-auto md:mx-0 gap-2'>
               <Zap fill='black' height={'20px'} width={'14px'}/> Generate your website
            </Link>
        </motion.div>
    </motion.div>

    </div>
  )
}

export default SectionNine