"use client"
import { apiService } from '@/utils/apiService'
import { ArrowRight, ArrowRightCircle, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useAuth } from '@/context/UserContext'
import { LoadingSpinner } from '@/components/loadingSpinner'
const Industry = () => {
  const router = useRouter()
  const {token} = useAuth()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [industry, setIndustry] = useState('')
  const [names, setNames] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIndustry(e.target.value)
  }


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await apiService.post(
        "/api/Business/AboutBusiness",
        { value: industry },
        { 'Authorization': `Bearer ${token}` }
      );
      console.log(resp.names)
  
        
      if (resp.succeeded === false) {
        setError(resp.responseMessage)
        setLoading(false);
      } else {
        if(resp.names[0].split('\n').length > 1) {
          setNames(resp.names[0].split('\n'))
        } else {
          setError("unable to generate name please tell us more about your business")
        }
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };
  const handleSelected = async (name: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>, i: number) => {
    e.preventDefault()
    setIsLoading(true)
    setSelectedIndex(i)
    try {
      const resp = await apiService.post(
        "/api/Business/BusinessName",
        { value: name.replace(/^\d+\.\s*/, '')},
        { 'Authorization': `Bearer ${token}` }
      );      
   
      if (resp.succeeded === false) {
        setError(resp.responseMessage)
        setIsLoading(false);
      } else {
    router.push('/onboarding/location')

      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className=" z-10 md:px-[70px] px-4  py-[50px] max-w-[560px] w-full  text-white bg-white flex items-center flex-col rounded-lg gap-7 border-white border">
    <Image src={"/icon.svg"} alt="icon" width={100} height={100} />
    <div className=" text-center">
    <p className=" text-[#000103] font-bold text-[31px] leading-tight">Tell us about your business to generate a business name</p>

    </div>
    {names.length > 1 &&     <div onClick={handleSubmit} className=' flex items-center gap-1 self-start'>
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="21" viewBox="0 0 13 21" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.13251 12.107H0.657201C0.505506 12.107 0.358479 12.0546 0.241069 11.9585C-0.0398486 11.7287 -0.0812684 11.3147 0.148553 11.0337L8.97811 0.241085C9.14723 0.0343676 9.42463 -0.0494423 9.67992 0.0290578C10.0268 0.135735 10.2216 0.503452 10.1149 0.850371L7.86638 8.16265H12.3427C12.4945 8.16265 12.6415 8.21515 12.7589 8.31124C13.0398 8.5411 13.0812 8.95514 12.8513 9.23602L4.02075 20.0268C3.85162 20.2335 3.57421 20.3173 3.31895 20.2387C2.97204 20.132 2.77732 19.7643 2.88402 19.4174L5.13251 12.107Z" fill="#0030AD"/>
</svg>
<span className=' text-[#0030AD] cursor-pointer text-sm font-bold'>
    Regenerate 
</span>
    </div>}
    <form className=" flex flex-col w-full text-[#8f8f8f] gap-9">

        <div className=" flex items-center gap-2 border px-[20px] py-3 overflow-hidden text-[#8f8f8f] rounded-[8px] border-[#8F8F8F]">
          {/* <Search className=' w-4 h-4' /> */}
            <input onChange={handleChange} value={industry} type="text" className=" border-none outline-none shadow-none w-full h-full" placeholder="Tell us about your business" />
        </div>
        <div className=" flex flex-wrap gap-[6px] w-full text-[#8f8f8f]">
   {error ? <p className=' font-bold text-red-600 text-xs'>{error}</p> : names.map((d: string,i) => {
   return <button disabled={isLoading} key={i} onClick={(e) => handleSelected(d, e, i)} className={` cursor-pointer flex items-center justify-center gap-1 px-6 w-fit py-2  rounded-full border border-[rgba(0,1,3,0.19)] text-[#000103]  text-[13px] font-semibold`}>
   {selectedIndex === i && isLoading && <LoadingSpinner divClassName=' w-[20px] h-[20px]' />} {d}

   </button>})
   }
    </div>
        {error && <p className=' font-bold text-red-600 text-xs'>{error}</p> }
        <button onClick={handleSubmit} className={` ${industry.length > 1 ? 'bg-[#0030AD] text-white' : 'bg-[#D5D9EA] text-[rgba(0,1,3,0.39)]'}  rounded-[8px] py-3 font-bold flex items-center justify-center `}>{industry.length < 1 ? 'See some name suggestions' : loading ? <LoadingSpinner divClassName=' w-[20px] h-[20px]' /> : 'See some suggestions'}</button>
       
    </form>
    <Link href={'/onboarding/business'} className="flex items-center gap-1">
        {/* <p className=" text-[#8F8F8F] text-sm">Not sure ?</p><Link href={'/onboarding/business-suggestions'} className="text-[#0030AD] font-bold text-sm underline">See some suggestions</Link> */}
        <span className=' text-[#8F8F8F] text-sm'>
          Skip
        </span>
        <ArrowRight className=' w-4 h-4 text-[#0030AD]  ' />
        </Link>
  </div>
  )
}

export default Industry