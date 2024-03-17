'use client'
import { LoadingSpinner } from "@/components/loadingSpinner";
import { apiService } from "@/utils/apiService";
import { ArrowBigLeft, ArrowLeft, LockKeyhole, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const handleSubmit = async() => {
    setLoading(true)
    try {
      const resp = await apiService.post('/api/Auth/ForgottenPassword', email)
      console.log(resp)
    if(resp.succeeded === false) {
      setError(resp.responseMessage)
    }
    setLoading(false)
    } catch (error) {
      
    } finally{
      setLoading(false)
    }
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return (
    <div
      style={{
        backgroundImage: "url('/grid.svg')",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
      className=" flex relative items-center flex-col min-h-screen gap-8  justify-center  bg-[#0030AD] py-4 w-full h-full"
    >
        <div className="absolute max-w-[863px] w-full h-[410px] bg-[#5F8CFF] blur-3xl">

        </div>
      <div className=" z-10 md:px-[70px] px-4  py-[50px] max-w-[560px] w-full  text-white bg-white flex items-center flex-col rounded-lg gap-7 border-white border">
        <Image src={"/icon.svg"} alt="icon" width={100} height={100} />
        <div className=" text-center max-w-[278px]">
        <p className=" text-[#000103] font-bold text-[31px]">Forgot password</p>

      <p className=" text-sm text-[#8F8F8F] text-center">Enter your email address and we’ll send you instructions on how to reset your password</p>
        </div>
        <form className=" flex flex-col w-full text-[#8f8f8f] gap-9">

            <div className=" flex items-center gap-2 border px-[20px] py-3 overflow-hidden text-[#8f8f8f] rounded-[8px] border-[#8F8F8F]">
            <Mail  className=" w-4 h-4 text-[#8f8f8f]" />
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className=" border-none outline-none shadow-none w-full h-full" placeholder="Enter your email" />
            </div>
           {error.length > 1 && <span className=" text-red-600 font-semibold text-sm">{error}</span> }

            <button onClick={handleSubmit} disabled={emailRegex.test(email) === false} className=" bg-[#0030AD] disabled:bg-[#D5D9EA] disabled:cursor-not-allowed text-white  rounded-[8px] py-3 font-bold text-[rgba(0,1,3,0.39)]">{loading ? <LoadingSpinner divClassName=" w-[20px] h-[20px]" /> : 'Send reset instructions'}</button>
           
        </form>
        <div className="flex gap-1">
            <p className=" text-[#8F8F8F] text-sm">Go back to</p><Link href={'/signin'} className="text-[#0030AD] font-bold text-sm">Sign in</Link>

            </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
