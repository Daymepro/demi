"use client"
import React from 'react'
import {memo} from 'react'
import {motion} from 'framer-motion'

const SectionTwo = () => {
  return (
    <div className=' flex items-center pb-4 flex-col md:flex-row justify-center gap-3 pt-10 px-2'>
        <motion.div
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
        >
            <img src="/sectionTwo.svg" loading='lazy' alt="" />
        </motion.div>
        <motion.div
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
        >
            <img src="/sectionTwo-left.svg" loading='lazy' alt="" />
        </motion.div>
    </div>
  )
}

export default memo(SectionTwo)