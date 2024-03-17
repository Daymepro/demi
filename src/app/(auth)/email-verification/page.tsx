"use client"
import { LoadingSpinner } from '@/components/loadingSpinner';
import { useAuth } from '@/context/UserContext'
import { apiService } from '@/utils/apiService';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import OtpInput from "react-otp-input";
const EmailVerification = () => {
    const {user} = useAuth()
    const router = useRouter()
    const [otp, setOtp] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const handleSubmit = async() => {
        // let authData = {
        //   token:otp,
        //   userId:email
        // }
        // dispatch(authUser(authData)).then((result) => {
        //   if(result.payload.succeeded===true){
        //     Navigate('/login')
        //   }
        // }).catch((err) => {
          
        // });
        setLoading(true)
        try {
            const response = await apiService.post('/api/Auth/VerifyEmail', {
                token: otp,
                userId: user?.email
            })
            if(response.succeeded === true) {
                router.push('/signin')
            } else {
                setError(response.responseMessage)
            }  
        } catch (error) {
            console.log(error)
        }
      
        setLoading(false)
      }
  return (
    <div
    style={{
      backgroundImage: "url('/grid.svg')",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
    }}
    className=" flex relative  items-center flex-col h-full  gap-8  justify-center min-h-screen  bg-[#0030AD]  w-full"
  >


      <div className="absolute max-w-[863px] w-full no-scrollbar  h-[410px] bg-[#5F8CFF] blur-3xl"></div>
      <div className=" z-10 md:px-[70px] px-4   py-[50px] max-w-[560px] w-full  text-white bg-white flex items-center flex-col rounded-lg gap-7 border-white border">
        <Image src={"/icon.svg"} alt="icon" width={100} height={100} />
        <p className=" text-black font-bold text-[31px]">Verify email!</p>

<div className=' text-black font-semibold text-sm text-center'>A verification email has been sent to your email address <span className=' text-ai-button-blue font-bold'>{user?.email}.</span> Kindly enter the OTP in the mail to verify your account </div>
<OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            renderSeparator={<span></span>}
            renderInput={(props) => <input {...props} />}
            // containerStyle={ { width: "20px" } }
            inputStyle={{
              width: "64px",
              fontWeight: "700",
              color: 'black',
              fontSize: "40px",
              height: "64px",
              margin: "0 16px",
              border: "1px solid rgba(0, 0, 0, 0.50)",
              borderRadius: "8px",
            }}
          />
          {error && <div className=' text-red-600 text-xs font-bold'>{error}</div>}
<button onClick={handleSubmit} className=' flex items-center justify-center w-fit px-4 py-2 rounded-[8px] bg-ai-button-blue text-white'>{loading ? <LoadingSpinner svgClassName=' w-[20px] h-[20px]' /> : 'Submit'}</button>
      </div>
  </div>
  )
}

export default EmailVerification