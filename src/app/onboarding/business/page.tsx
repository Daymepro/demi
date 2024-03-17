"use client";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { useAuth } from "@/context/UserContext";
import { apiService } from "@/utils/apiService";
import { ArrowLeft, MapPinIcon, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Business = () => {
  const { token } = useAuth();
  const router = useRouter();
  const [business, setBusiness] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await apiService.post(
        "/api/Business/BusinessName",
        { value: business },
        { Authorization: `Bearer ${token}` }
      );
      console.log(resp);
        
      if (resp.succeeded !== false) {
        router.push("/website");
      } else {
        setError(resp.responseMessage)
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" z-30 md:px-[70px] px-4  py-[50px] max-w-[560px] w-full  text-white bg-white flex items-center flex-col rounded-lg gap-7 border-white border">
      <Link
        href={"/onboarding/location"}
        className=" flex items-center gap-1 text-[#0030AD] self-start"
      >
        <ArrowLeft className=" w-4 h-4 stroke-2" />
        <span className=" font-bold text-xs">Back</span>
      </Link>
      <Image src={"/icon.svg"} alt="icon" width={100} height={100} />
      <div className=" text-center">
        <p className=" text-[#000103] font-bold text-[31px] leading-tight ">
          What is the name of your business ?
        </p>
      </div>
      <form className=" flex flex-col w-full text-[#8f8f8f] gap-9">
        <div className=" flex items-center gap-2 border px-[20px] py-3 overflow-hidden text-[#8f8f8f] rounded-[8px] border-[#8F8F8F]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 4.00005V0.800049H0V15.2H16V4.00005H8ZM3.2 13.6H1.6V12H3.2V13.6ZM3.2 10.4H1.6V8.80005H3.2V10.4ZM3.2 7.20005H1.6V5.60005H3.2V7.20005ZM3.2 4.00005H1.6V2.40005H3.2V4.00005ZM6.4 13.6H4.8V12H6.4V13.6ZM6.4 10.4H4.8V8.80005H6.4V10.4ZM6.4 7.20005H4.8V5.60005H6.4V7.20005ZM6.4 4.00005H4.8V2.40005H6.4V4.00005ZM14.4 13.6H8V12H9.6V10.4H8V8.80005H9.6V7.20005H8V5.60005H14.4V13.6ZM12.8 7.20005H11.2V8.80005H12.8V7.20005ZM12.8 10.4H11.2V12H12.8V10.4Z"
              fill="#8F8F8F"
            />
          </svg>
          <input
            onChange={(e) => setBusiness(e.target.value)}
            value={business}
            type="text"
            className=" border-none outline-none shadow-none w-full h-full"
            placeholder="Enter your business name"
          />
        </div>
        
        {error && <p className=" text-xs font-bold text-red-600">{error}</p> }
        <button
          onClick={handleSubmit}
          disabled={business.length < 1 || loading}
          className={` ${
            business.length > 1
              ? "bg-[#0030AD] text-white"
              : "bg-[#D5D9EA] text-[rgba(0,1,3,0.39)]"
          }  rounded-[8px] py-3 font-bold flex items-center justify-center `}
        >
          {loading ? <LoadingSpinner divClassName=" w-[20px] h-[20px]" /> : "Generate website"}
        </button>
      </form>
      <div className="flex gap-1">
        <p className=" text-[#8F8F8F] text-sm">Not sure?</p>
        <Link
          href={"/onboarding/name-suggestions"}
          className="text-[#0030AD] font-bold text-sm underline"
        >
          See some suggestions
        </Link>
      </div>
    </div>
  );
};

export default Business;
