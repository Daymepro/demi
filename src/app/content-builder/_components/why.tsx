"use client"
import React from 'react'
import {motion} from 'framer-motion'

const Why = () => {
  return (
    <div className=' px-2 py-20'>
        <div className=' max-w-[1148px] bg-[#F9FAFB] rounded-[8px] w-full flex md:flex-row flex-col justify-between mx-auto py-6 pl-6 gap-3'>
        <motion.div
        initial={{
            opacity: 0,
            x: -200
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1
          }
        }}
        viewport={{once: true}}
        className='w-full md:max-w-[427px] flex flex-col gap-3 '>
<p className=' font-semibold text-[20px] text-[#00010399]'>
The Power of AI Blog
</p>
<p className='text-[#000103] font-bold text-[39px] leading-[104%]'> 
Why every business needs a blog
</p>
<p className=' text-[#000103B3]'>
Lorem ipsum dolor sit amet consectetur. Adipiscing ut diam non ac sed sit tellus sit. Volutpat vitae felis vulputate dui at hendrerit sed. Enim sollicitudin massa gravida id sed. Arcu sapien fermentum a donec quis non. Sagittis praesent a enim sit urna eu nisl. Quisque quis facilisi in urna id. Aliquam nulla egestas tristique nullam tristique vulputate convallis purus. Aliquet risus arcu auctor sagittis eu dui sapien. Ut libero pharetra enim turpis viverra faucibus turpis sed sed. Et nunc scelerisque ut sed amet a quam. Cras mauris ac lectus ullamcorper laoreet felis quam.
</p>
<p className=' text-ai-button-blue font-bold'>Learn more</p>
        </motion.div>
        <div className=' relative'>
            <motion.img   initial={{
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
        viewport={{once: true}} src="/why-main.svg" alt="" className=' w-full  ' />
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
                delay: 2
              }
            }}
            src="/why-mobile.svg" alt="" className=' absolute md:-left-[100px] left-0 top-20' />
        </div>

        </div>
    </div>
  )
}

export default Why