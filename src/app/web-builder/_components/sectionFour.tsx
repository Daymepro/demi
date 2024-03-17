"use client"
import React, { memo } from 'react'
import {motion} from 'framer-motion'
const SectionFour = () => {
  return (
    <div className=' flex items-center flex-col md:flex-row justify-center gap-2 py-20 px-2'>
        <div>
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
                }
            }}
            viewport={{once: true}}
        src="/sectionFour.svg" alt="" />

        </div>
        <div>
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
                    delay: 1
                }
            }}
            viewport={{once: true}}
        src="/sectionFour.svg" alt="" />

        </div>

        
    </div>
  )
}

export default memo(SectionFour)