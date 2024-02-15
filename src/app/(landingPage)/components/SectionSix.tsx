import React from 'react'

const SectionSix = () => {
  return (
    <div className='xl:px-[140px]  md:px-10 px-5 py-12 flex flex-col items-center justify-center '>
        <div className='flex w-full  items-center justify-between mt-28 gap-20'>
            <div className='w-5/12 flex flex-col gap-4 '>
            <span className=' text-[rgba(0,1,3,0.60)]  2xl:text-lg font-semibold'>CRM</span>
            <h1 className='text-4xl 2xl:text-5xl font-semibold'>Get started with AI Web Hero</h1>
            <p className=' text-[rgba(0,1,3,0.60)] text-sm 2xl:text-base '>grow your business with built-in SEO, automated blogging, ad generation, and review management</p>
            <p className='flex font-bold gap-2 text-ai-button-blue text-sm 2xl:text-base '> Learn more <img src="/images/LearnMoreIcon.svg" alt="" /></p>

            </div>
            <div className='w-7/12'>
                <img src="/images/landing_section_6_img.svg" className='w-full' alt="" />
            </div>
        </div>
    </div>
  )
}

export default SectionSix