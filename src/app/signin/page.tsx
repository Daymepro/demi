"use client";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { apiService } from "@/utils/apiService";
import { ArrowBigLeft, ArrowLeft, LockKeyhole, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "./signin.css";
import {  useAuth } from "@/context/UserContext";
import { useRouter } from "next/navigation";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formInputs, setFormInputs] = useState({
    password: "",
    email: "",
  });
  const router = useRouter()
  const {initializeUser} = useAuth()
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await apiService.post(`/api/Auth/Signin`, formInputs);
      if (resp.succeeded === false) {
        setError(resp.responseMessage);
      } else if(resp.succeeded === true) {
        initializeUser(resp, () => {

          return router.push(`/website`);
        } 
          )
      }
      setLoading(false);
    } catch (error: any) {
      setError(error.response.data.title);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div
      style={{
        backgroundImage: "url('/grid.svg')",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
      className=" flex relative  items-center flex-col h-full  gap-8  justify-center  bg-[#0030AD]  w-full"
    >
      <div className=" flex flex-col overflow-y-scroll w-screen remove-scrollbar h-screen  items-center justify-center ">
        <div className="absolute max-w-[863px] w-full no-scrollbar  h-[410px] bg-[#5F8CFF] blur-3xl"></div>
        {/* <Link href={'/'} className="">
  <button className=" border border-white rounded-[8px] px-6 py-2 text-sm bg-transparent flex items-center gap-2 text-white"><ArrowLeft className=" w-4 h-4" /> <span>back</span></button>
</Link> */}
        <div className=" z-10 md:px-[70px] px-4   py-[50px] max-w-[560px] w-full  text-white bg-white flex items-center flex-col rounded-lg gap-7 border-white border">
          <Image src={"/icon.svg"} alt="icon" width={100} height={100} />
          <p className=" text-black font-bold text-[31px]">Welcome back!</p>
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
            <svg
              width="163"
              height="2"
              viewBox="0 0 163 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L162 0.999986"
                stroke="#D6D6D6"
                stroke-linecap="round"
              />
            </svg>
            <span className=" text-[rgba(0,1,3,0.70)] whitespace-nowrap">
              Or continue with
            </span>
            <svg
              width="163"
              height="2"
              viewBox="0 0 163 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L162 0.999986"
                stroke="#D6D6D6"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <form className=" flex flex-col w-full text-[#8f8f8f] gap-9">
            <div className=" flex items-center gap-2 border px-[20px] py-3 overflow-hidden text-[#8f8f8f] rounded-[8px] border-[#8F8F8F]">
              <Mail className=" w-4 h-4 text-[#8f8f8f]" />
              <input
                onChange={handleChange}
                type="text"
                name="email"
                className=" border-none outline-none shadow-none w-full h-full"
                placeholder="Enter your email"
              />
            </div>
            <div className="  border items-center flex gap-2 py-3 px-[20px] overflow-hidden rounded-[8px] border-[#8F8F8F]">
              <LockKeyhole className=" w-4 h-4 text-[#8f8f8f]" />
              <input
                onChange={handleChange}
                name="password"
                type="text"
                className=" border-none w-full shadow-none outline-none h-full"
                placeholder="Enter your password"
              />
            </div>
            {error && (
              <p className=" text-[#E54335] font-bold text-xs">{error}</p>
            )}
            <Link
              href={"/forgot-password"}
              className=" self-end text-[#0030AD] text-xs font-bold"
            >
              Forgot password
            </Link>
            <button
              onClick={handleSubmit}
              className=" bg-[#0030AD] items-center flex justify-center rounded-[8px] py-3 font-bold text-white"
            >
              {loading ? (
                <LoadingSpinner divClassName=" w-[20px] h-[20px]" />
              ) : (
                " Sign in"
              )}
            </button>
          </form>
          <div className="flex">
            <p className=" text-[#8F8F8F] text-sm">Don't have an account?</p>
            <Link href={"/signup"} className="text-[#0030AD] font-bold text-sm">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
