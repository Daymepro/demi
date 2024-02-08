'use client'
import { ArrowLeft, MapPinIcon, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Select from 'react-select'

const page = () => {
    const [business, setBusiness] = useState('')
    const selectStyle = {
        option: (provided: any, state: any) => {
          return {
            ...provided,
            fontSize: ".80rem",
            background: 'black'
            // textTransform: "capitalize"
          };
        },
        control: (base: any, state: any) => ({
          ...base,
          // height: 38,
          minHeight: 38,
          fontSize: "1rem",
          boxShadow: "none",
          outline: 'none',
      
        }),
        menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
      };
      const options = [
        {
            value: 'english',
            label: 'English'
        }
      ]
  return (
    <div className=" z-30 md:px-[50px] px-4  py-[40px] max-w-[560px] w-full  text-white bg-white flex items-center flex-col rounded-lg gap-7 border-white border">
        <Link href={'/onboarding/location'} className=' flex items-center gap-1 text-[#0030AD] self-start' >
            <ArrowLeft className=' w-4 h-4 stroke-2' />
            <span  className=' font-bold text-xs'>Back</span>
        </Link>
    <Image src={"/icon.svg"} alt="icon" width={100} height={100} />
    <div className=" text-center">
    <p className=" text-[#000103] font-bold text-[31px] leading-tight ">Choose your website language</p>
    <p className=' text-[#8F8F8F] text-sm'>Your website will generate in the following language</p>

    </div>
   
    <div className=" w-[80%] ">
        <Select styles={selectStyle} options={options} className=' w-full' />
    </div>

  </div>
  )
}

export default page