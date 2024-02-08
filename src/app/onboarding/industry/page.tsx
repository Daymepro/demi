"use client"
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
  const [industry, setIndustry] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIndustry(e.target.value)
  }
 
  return (
    <div className=" z-10 md:px-[70px] px-4  py-[50px] max-w-[560px] w-full  text-white bg-white flex items-center flex-col rounded-lg gap-7 border-white border">
    <Image src={"/icon.svg"} alt="icon" width={100} height={100} />
    <div className=" text-center">
    <p className=" text-[#000103] font-bold text-[31px] leading-tight">What type of business are you building?</p>

    </div>
    <form className=" flex flex-col w-full text-[#8f8f8f] gap-9">

        <div className=" flex items-center gap-2 border px-[20px] py-3 overflow-hidden text-[#8f8f8f] rounded-[8px] border-[#8F8F8F]">
          <Search className=' w-4 h-4' />
            <input onChange={handleChange} value={industry} type="text" className=" border-none outline-none shadow-none w-full h-full" placeholder="Coaching, Photography, Landscaping" />
        </div>
        <button className={` ${industry.length > 1 ? 'bg-[#0030AD] text-white' : 'bg-[#D5D9EA] text-[rgba(0,1,3,0.39)]'}  rounded-[8px] py-3 font-bold `}>{industry.length < 1 ? 'Get started' : 'Next'}</button>
       
    </form>
    <div className="flex gap-1">
        <p className=" text-[#8F8F8F] text-sm">Not sure ?</p><Link href={'/onboarding/business-suggestions'} className="text-[#0030AD] font-bold text-sm underline">See some suggestions</Link>

        </div>
  </div>
  )
}

export default page