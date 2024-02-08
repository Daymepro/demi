import React from 'react'

function SectionTwo() {
  return (
    <div className='xl:px-[140px] md:px-10 px-5 flex lg:flex-row items-center justify-between gap-6 flex-col py-24'>
        <div className='min-w-[300px] h-[400px] max-w-[500px] text-left p-9 bg-[#F9FAFB] rounded-2xl flex items-center flex-col'>
            <img src="/images/rectangle-1.svg" alt="icon rectangle" />
            <h2 className=' font-semibold text-3xl'>Get your business online in seconds.</h2>
            <span className=' text-[rgba(0,1,3,0.60)] font-medium '>Effortlessly publish a professional website, no coding skills required.</span>
        </div>
        <div className='min-w-[300px] h-[400px] max-w-[500px] p-9 bg-[#F9FAFB] rounded-2xl text-left flex items-center flex-col'>
            <img src="/images/rectangle-1.svg" alt="icon rectangle" />
            <h2 className=' font-semibold text-3xl '>Find customers in minutes.</h2>
            <span className=' text-[rgba(0,1,3,0.60)]  font-medium '>Grow your revenue with built-in SECO, marketing tools, and review automation.</span>
        </div>
        <div className='min-w-[300px] h-[400px] max-w-[500px] p-9 bg-[#F9FAFB]  rounded-2xl text-left flex items-center flex-col'>
            <img src="/images/rectangle-3.svg"  alt="icon rectangle" />
            <h2 className=' font-semibold text-3xl'>Save hours of manual work every week.</h2>
            <span className=' text-[rgba(0,1,3,0.60)] font-medium '>Grow your revenue with built-in SECO, marketing tools, and review automation.</span>
        </div>
    </div>
  )
}

export default SectionTwo