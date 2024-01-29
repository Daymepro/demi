'use client'
import { ArrowLeft, MapPinIcon, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [business, setBusiness] = useState('')
    const bizName = ['Global Business Advisor', 'Strategy Solutions Consulting', 'Proactive Business consulting', 'Optimum business strategies', 'Innovative management solution']
  return (
    <div className=" z-30 md:px-[50px] px-4  py-[40px] max-w-[560px] w-full  text-white bg-white flex items-center flex-col rounded-lg gap-7 border-white border">
        <Link href={'/onboarding/business'} className=' flex items-center gap-1 text-[#0030AD] self-start' >
            <ArrowLeft className=' w-4 h-4 stroke-2' />
            <span  className=' font-bold text-xs'>Back</span>
        </Link>
    <Image src={"/icon.svg"} alt="icon" width={100} height={100} />
    <div className=" text-center">
    <p className=" text-[#000103] font-bold text-[31px] leading-tight ">What business would you like to start  with ?</p>
    <p className=' text-[#8F8F8F] text-sm'>Here are some suggestions</p>

    </div>
    <div className=' flex items-center gap-1 self-start'>
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="21" viewBox="0 0 13 21" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.13251 12.107H0.657201C0.505506 12.107 0.358479 12.0546 0.241069 11.9585C-0.0398486 11.7287 -0.0812684 11.3147 0.148553 11.0337L8.97811 0.241085C9.14723 0.0343676 9.42463 -0.0494423 9.67992 0.0290578C10.0268 0.135735 10.2216 0.503452 10.1149 0.850371L7.86638 8.16265H12.3427C12.4945 8.16265 12.6415 8.21515 12.7589 8.31124C13.0398 8.5411 13.0812 8.95514 12.8513 9.23602L4.02075 20.0268C3.85162 20.2335 3.57421 20.3173 3.31895 20.2387C2.97204 20.132 2.77732 19.7643 2.88402 19.4174L5.13251 12.107Z" fill="#0030AD"/>
</svg>
<span className=' text-[#0030AD] text-sm font-bold'>
    Generate your website
</span>
    </div>
    <div className=" flex flex-wrap gap-[6px] w-full text-[#8f8f8f]">
   {bizName.map((d,i) => <div className=' cursor-pointer px-6 w-fit py-2  rounded-full border border-[rgba(0,1,3,0.19)] text-[#000103] text-[13px] font-semibold'>
    {d}
   </div>)}
    </div>

  </div>
  )
}

export default page