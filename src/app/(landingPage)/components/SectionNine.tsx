import { Button } from '@/components/ui/button'
import { Zap } from 'lucide-react'
import React from 'react'

const SectionNine = () => {
  return (
    <div className='xl:mx-[140px] gap-x-32 bg-[#0030AD] rounded-3xl  md:mx-10 mx-5 px-10 mb-24 flex flex-col sm:flex-row-reverse  justify-between '>
        <div className='w-5/12 max-w-[500px]'>
            <img src=" /images/landing_section_9_1_img.svg" alt="" />
        </div>
        <div className='flex flex-col justify-center w-7/12 items-start gap-3'>

            <h1 className='text-4xl font-bold text-white'>Try AIWeb Hero for free today</h1>
            <span className='text-[20px] text-white '>AI Web Hero's mission is to make website creation more accessible than ever, thanks to artificial intelligence. Become the hero of your own website with AIWebHero!</span>
            <Button variant={"custom"} className='mt-6  flex  bg-white text-black items-center justify-center gap-2'>
               <Zap fill='black' height={'20px'} width={'14px'}/> Generate your website
            </Button>
        </div>
    </div>
  )
}

export default SectionNine