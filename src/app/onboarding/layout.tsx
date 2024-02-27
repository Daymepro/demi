"use client";
import UserContext, { useAuth } from "@/context/UserContext";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React, { useEffect } from "react";
const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const pathSplit = pathname.split("/")[2];
  const excludedLayouts = ['business-suggestions', 'language', 'name-suggestions']
const {user, isLoaded} = useAuth()


useEffect(() => {
  if(!isLoaded) return
  if(!user) {
    redirect('/signin')
  }

},[])
  return (

    <div style={{
      backgroundImage: "url('/grid.svg')",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
    }} className=" bg-[#0030AD] w-full relative min-h-[100vh] flex flex-col gap-4 justify-center items-center">
     {excludedLayouts.includes(pathSplit) ? null : <div className=" flex items-center z-30  justify-between gap-3">
        <div
          className=" flex text-white gap-3 items-center"
        >
          <div className=" flex items-center gap-[2px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <circle
                cx="9"
                cy="9"
                r="7"
                fill="#0030AD"
                stroke={"white"}
                opacity={pathSplit === "industry" ? 1 : 0.4}
                strokeWidth="4"
              />
            </svg>

            {pathSplit === "industry" ? (
              <span className=" text-sm font-bold">Industry</span>
            ) : (
              <div className=" w-[18px] bg-white h-[2px] opacity-[0.4]"></div>
            )}
          </div>
        </div>
        <div
          className=" flex text-white gap-3 items-center"
        >
          <div className=" flex items-center gap-[2px]">
       {pathSplit === 'industry' &&   <div className=" w-[18px] bg-white h-[2px] opacity-[0.4]"></div>}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <circle
                cx="9"
                cy="9"
                r="7"
                fill="#0030AD"
                stroke={"white"}
                opacity={pathSplit === "location" ? 1 : 0.4}
                strokeWidth="4"
              />
            </svg>
            {pathSplit === "location" && (
              <span className=" text-sm font-bold">Location</span>
            )}
       {pathSplit === 'business' &&   <div className=" w-[18px] bg-white h-[2px] opacity-[0.4]"></div>}

          </div>
        </div>

        <div
          className=" flex text-white gap-3 items-center"
        >
          <div className=" flex items-center gap-[2px]">
           {pathSplit !== 'business' && <div className=" w-[18px] bg-white h-[2px] opacity-[0.4]"></div>}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <circle
                cx="9"
                cy="9"
                r="7"
                fill="#0030AD"
                stroke={"white"}
                opacity={pathSplit === "business" ? 1 : 0.4}
                strokeWidth="4"
              />
            </svg>
          </div>

          {pathSplit === "business" && (
            <span className=" text-sm font-bold">Biz.name</span>
          )}
        </div>
      </div>}
      <div className=" flex relative items-center">
      <div className="absolute max-w-[863px] w-full h-[410px] bg-[#5F8CFF] blur-3xl">

</div>
<div className=" z-20 ">
{children}

</div>
        </div>
    </div>

  );
};

export default Layout;
