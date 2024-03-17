'use client'
import { LoadingSpinner } from '@/components/loadingSpinner'
import { useAuth } from '@/context/UserContext'
import { apiService } from '@/utils/apiService'
import { ArrowLeft, MapPinIcon, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Location = () => {
const [location, setLocation] = useState('')
const router = useRouter()
const {token} = useAuth()
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');


const handleSubmit = async (e: any) => {
  e.preventDefault();
  setLoading(true);
  try {
    const resp = await apiService.post(
      "/api/Business/Location",
      { value: location },
      { 'Authorization': `Bearer ${token}` }
    );
      
    if (resp.succeeded !== false) {
      router.push("/onboarding/business");
    } else {
      setError(resp.responseMessage)
      setLoading(false)
    }
    setLoading(false);
  } catch (error) {
  } finally {
    setLoading(false)
  }
};
  return (
    <div className=" z-10 md:px-[70px] px-4  py-[50px] max-w-[560px] w-full  text-white bg-white flex items-center flex-col rounded-lg gap-7 border-white border">
        <Link href={'/onboarding/industry'} className=' flex items-center gap-1 text-[#0030AD] self-start' >
            <ArrowLeft className=' w-4 h-4 stroke-2' />
            <span  className=' font-bold text-xs'>Back</span>
        </Link>
    <Image src={"/icon.svg"} alt="icon" width={100} height={100} />
    <div className=" text-center">
    <p className=" text-[#000103] font-bold text-[31px] leading-tight">Where is your business located ?</p>

    </div>
    <form className=" flex flex-col w-full text-[#8f8f8f] gap-9">

        <div className=" flex items-center gap-2 border px-[20px] py-3 overflow-hidden text-[#8f8f8f] rounded-[8px] border-[#8F8F8F]">
          <MapPinIcon className=' w-4 h-4' />
            <input onChange={(e) => setLocation(e.target.value)} value={location} type="text" className=" border-none outline-none shadow-none w-full h-full" placeholder="United Kingdom, Dubai, London" />
        </div>
        <button onClick={handleSubmit} disabled={location.length < 1} className={` ${location.length > 1 ? 'bg-[#0030AD] text-white' : 'bg-[#D5D9EA] text-[rgba(0,1,3,0.39)]'}  rounded-[8px] py-3 font-bold flex items-center justify-center `}>{loading ? <LoadingSpinner divClassName=' w-[20px] h-[20px]' /> : 'Next'}</button>
       
    </form>
    {/* <div className="flex gap-1">
        <p className=" text-[#8F8F8F] text-sm">Website language English,</p><Link href={'/onboarding/language'} className="text-[#0030AD] font-bold text-sm underline">Change</Link>

        </div> */}
  </div>
  )
}

export default Location