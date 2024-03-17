"use client"

import React from 'react'
import {motion} from 'framer-motion'

const Professional = () => {
  return (
    <div className=' px-2 flex md:flex-row flex-col gap-3 justify-center items-center py-20'>
        <motion.div
            initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.7,
                }
              }}
              viewport={{once: true}}
        >
            <img src="/professional-one.svg" alt="" />
        </motion.div>
        <motion.div
           initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 1,
              duration: 0.7,
            }
          }}
          viewport={{once: true}}
        >
            <img src="/professional-two.svg" alt="" />
        </motion.div>
    </div>
  )
}

export default Professional