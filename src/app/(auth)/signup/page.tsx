'use client'
import { LoadingSpinner } from "@/components/loadingSpinner";
import { apiService } from "@/utils/apiService";
import { ArrowBigLeft, ArrowLeft, EyeIcon, EyeOffIcon, LockKeyhole, Mail, MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/UserContext";

const SignUp = () => {
  const route = useRouter()
  // const {initializeUser } = useAuth()
  const [formInputs, setFormInputs] = useState({
    firstName: "",
    lastName: '',
    address: '',
    password: '',
    email: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [viewPassword, setViewPassword] = useState<'password' | 'text'>('password')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormInputs(prev => (
    {
      ...prev, [name] : value
    }
    ))
  }
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
   e.preventDefault()
   setLoading(true)
   try {
    const resp = await apiService.post('/api/Auth/SignUp', formInputs)
    if(resp.succeeded === false) {
      setError(resp.responseMessage)
    } else {
      // initializeUser(resp, () =>route.push('/onboarding/industry') )
      
    }
    setLoading(false)
   } catch (error) {
    
   } finally {
    setLoading(false)
   }
 
  }
  const handleViewPassword = () => {
    if(viewPassword === 'text') {
      setViewPassword('password')
    } else {
      setViewPassword('text')

    }
  }
  return (
    <div
      style={{
        backgroundImage: "url('/grid.svg')",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
      className=" flex relative items-center flex-col min-h-screen  gap-8  justify-center  bg-[#0030AD] py-4 w-full h-full"
    >
        <div className="absolute max-w-[863px] w-full h-[410px] bg-[#5F8CFF] blur-3xl">

        </div>
        {/* <Link href={'/'} className="">
          <button className=" border border-white rounded-[8px] px-6 py-2 text-sm bg-transparent flex items-center gap-2 text-white"><ArrowLeft className=" w-4 h-4" /> <span>back</span></button>
        </Link> */}
      <div className=" z-10 md:px-[70px] px-4  py-[50px] max-w-[560px] w-full  text-white bg-white flex items-center flex-col rounded-lg gap-7 border-white border">
        <Image src={"/icon.svg"} alt="icon" width={100} height={100} />
        <button className=" justify-center rounded-md border py-3 w-full border-[#d6d6d6] flex gap-[7px] items-center text-[#000103] font-bold text-sm">
          {" "}
          <svg
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2 15.2127C23.2 14.6133 23.1419 13.9947 23.0453 13.4147H14.674V16.8367H19.4686C19.2753 17.9387 18.6373 18.9053 17.6899 19.524L20.5513 21.7473C22.2333 20.1813 23.2 17.9 23.2 15.2127Z"
              fill="#4280EF"
            />
            <path
              d="M14.674 23.874C17.0713 23.874 19.082 23.0813 20.5513 21.728L17.69 19.524C16.8973 20.0653 15.8726 20.3747 14.674 20.3747C12.354 20.3747 10.4013 18.8087 9.68598 16.7207L6.74731 18.9827C8.25531 21.9793 11.31 23.874 14.674 23.874Z"
              fill="#34A353"
            />
            <path
              d="M9.68598 16.7013C9.31864 15.5993 9.31864 14.4007 9.68598 13.2987L6.74731 11.0173C5.49064 13.5307 5.49064 16.4887 6.74731 18.9827L9.68598 16.7013Z"
              fill="#F6B704"
            />
            <path
              d="M14.674 9.64466C15.9306 9.62533 17.168 10.1087 18.0766 10.9787L20.6093 8.42666C19.0046 6.91866 16.878 6.10666 14.674 6.12599C11.31 6.12599 8.25531 8.02066 6.74731 11.0173L9.68598 13.2987C10.4013 11.1913 12.354 9.64466 14.674 9.64466Z"
              fill="#E54335"
            />
          </svg>
          Sign up with google
        </button>
        <div className=" flex w-full justify-between items-center  text-xs">
        <svg width="163" height="2" viewBox="0 0 163 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L162 0.999986" stroke="#D6D6D6" strokeLinecap="round"/>
</svg> 
          <span className=" text-[rgba(0,1,3,0.70)] whitespace-nowrap">Or continue with</span>
          <svg width="163" height="2" viewBox="0 0 163 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L162 0.999986" stroke="#D6D6D6" strokeLinecap="round"/>
</svg> 
        </div>
        <form  className=" flex flex-col w-full text-[#8f8f8f] gap-3">
        <div className=" flex items-center gap-2 border px-[20px] py-3 overflow-hidden text-[#8f8f8f] rounded-[8px] border-[#8F8F8F]">
                <input onChange={handleChange} name="firstName" type="text" value={formInputs.firstName} className=" border-none outline-none shadow-none w-full h-full" placeholder="First name" />
            </div>
            <div className=" flex items-center gap-2 border px-[20px] py-3 overflow-hidden text-[#8f8f8f] rounded-[8px] border-[#8F8F8F]">
                <input onChange={handleChange} name="lastName" type="text" value={formInputs.lastName} className=" border-none outline-none shadow-none w-full h-full" placeholder="Last name" />
            </div>
            <div className=" flex items-center gap-2 border px-[20px] py-3 overflow-hidden text-[#8f8f8f] rounded-[8px] border-[#8F8F8F]">
            <Mail  className=" w-4 h-4 text-[#8f8f8f]" />
                <input onChange={handleChange} name="email" type="email" value={formInputs.email} className=" border-none outline-none shadow-none w-full h-full" placeholder="Enter your email" />
            </div>
            <div className=" flex items-center gap-2 border px-[20px] py-3 overflow-hidden text-[#8f8f8f] rounded-[8px] border-[#8F8F8F]">
            <MapPinIcon  className=" w-4 h-4 text-[#8f8f8f]" />
                <input onChange={handleChange} type="text" name="address" value={formInputs.address} className=" border-none outline-none shadow-none w-full h-full" placeholder="Enter your address" />
            </div>
            <div className="  border items-center flex gap-2 py-3 px-[20px] overflow-hidden rounded-[8px] border-[#8F8F8F]">
            <LockKeyhole className=" w-4 h-4 text-[#8f8f8f]" />
                <input onChange={handleChange} value={formInputs.password} name="password" type={viewPassword} className=" border-none w-full shadow-none outline-none h-full" placeholder="Enter your password" />
                <div className=" cursor-pointer" onClick={handleViewPassword}>
               {viewPassword === 'text' ? <EyeIcon className=" w-4 h-4 text-[#8f8f8f] " /> : <EyeOffIcon className=" w-4 h-4 text-[#8f8f8f] " />}

                </div>
            </div>
           {error.length > 1 && <span className=" text-red-600 font-semibold text-sm">{error}</span> }

            <button disabled={formInputs.address.length < 1 || formInputs.email.length < 1 || formInputs.firstName.length < 1 || formInputs.lastName.length < 1 || formInputs.address.length < 1 || formInputs.password.length < 8 }  onClick={handleSubmit} className=" bg-[#0030AD] disabled:bg-[#D5D9EA] disabled:cursor-not-allowed flex items-center justify-center rounded-[8px] py-3 font-bold text-white">{loading ? <LoadingSpinner divClassName=" w-[20px] h-[20px]" /> : ' Sign up'}</button>
        </form>
        <div className="flex">
            <p className=" text-[#8F8F8F] text-sm">Already have an account?</p><Link href={'/signin'} className="text-[#0030AD] font-bold text-sm">Sign in</Link>

            </div>
      </div>
    </div>
  );
};

export default SignUp;
