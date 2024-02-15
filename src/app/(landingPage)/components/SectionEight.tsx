import { ArrowDownLeftIcon, ArrowLeft, ArrowRightCircle } from 'lucide-react'
import React from 'react'

const SectionEight = () => {
  return (
    <div className='xl:px-[140px] gap-x-24  md:px-10 px-5 py-12 '>
        <div className='flex flex-col sm:flex-row-reverse md:px-14 md:py-24 justify-between '>
            <aside className='w-5/12 max-w-[500px]' >
                <img src="/images/landing_section_8_2_img.png" className='w-full' alt="section eight" />
            </aside>
            <aside className='relative w-5/12 flex flex-col justify-between pb-10'>
                <div className='text-[227px] font-semibold text-[#0030AD] absolute -top-[86px]'>“</div>
                <div className='text-lg sm:text-xl mt-[114px] md:text-2xl text-[#000103] font-semibold'>With AIWeb Hero, everything felt really obvious and other platforms i used, it was more complicated.
                    I also love the CRM tool.
                </div>
                <div className='flex flex-col  mt-[60px]'>
                    <span className='text-base text-[#000103] font-semibold'>Kentucky Lebrun</span>
                    <span className='text-sm text-[rgba(0,1,3,0.70)] '>Cudose Creative</span>
                </div>
                <div className='flex gap-4 '>
                    <ArrowLeft width={50} height={50} stroke='#0030AD' strokeWidth={1}/>
                    <ArrowRightCircle width={50} height={50} stroke='#0030AD' strokeWidth={1}/>
                </div>
            </aside>
        </div>
    </div>
  )
}

export default SectionEight