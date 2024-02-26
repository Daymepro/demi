"use client";
import {
  BellAlertIcon,
  ChevronDownIcon,
  HomeIcon,
  RectangleGroupIcon,
  UserIcon,
  WalletIcon,
} from "@heroicons/react/16/solid";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightCircleIcon, ChevronRightIcon } from "lucide-react";
import UserImage from "./userIcon";

const DashboardSidebar = () => {
  const pathname = usePathname();
  const pathSplit = pathname.split("/")[1];
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <>
      {pathSplit !== "onboarding" && (
        <div
        style={{transition: ' width 0.5s ease-in-out'}}
          className={`${
            expand === true ? "w-[330px]" : "w-[65px]"
          }  h-screen border-r  border-[#D5D5D5] py-10 px-3 `}
        >
          <div className=" flex flex-col mx-auto h-full justify-between">
            <div className=" flex justify-between">
            <div  className=" flex items-center gap-2">
              <div className=" rounded-full  h-[30px] w-[30px] object-contain">
              <UserImage />

              </div>
            {expand &&  <span className=" text-[#000103] font-bold text-[20px]">Sonio</span>}
            </div>
           {expand && <div className=" flex items-center justify-between">
              <span>
                <ChevronDownIcon className=" w-4 h-4" />
              </span>
            </div>}
            </div>
          
            <div className={`flex mt-[49px]  flex-col gap-1 `}>
              <Link
                href={"/"}
                className={`${
                  pathSplit === "home"
                    ? "text-[#000103]  bg-[#f3f4f6] rounded-sm "
                    : "text-[rgb(0,1,3,0.35)]"
                } flex items-center gap-2 px-3 py-3 `}
              >
                <HomeIcon className=" w-5 h-5 " />
                {expand && (
                  <span className=" font-medium font-sans text-[13px]">
                    Home
                  </span>
                )}
              </Link>
              <Link
                href={"/website/preview"}
                className={`${
                  pathSplit === "website"
                    ? " text-[#000103]  bg-[#f3f4f6] rounded-sm "
                    : " text-[rgb(0,1,3,0.35)] "
                } flex items-center gap-2 px-3 py-3 `}
              >
                <RectangleGroupIcon className="h-5 w-5 " />
                {expand && (
                  <span className=" font-medium font-sans text-[13px]">
                    Website
                  </span>
                )}
              </Link>
              <Link
                href={"/ksjds/content-generator"}
                className={`${
                  pathSplit === "content-generator"
                    ? "text-[#000103] bg-[#f3f4f6]  rounded-sm "
                    : "text-[rgb(0,1,3,0.35)]"
                } flex items-center gap-2 px-3 py-3  `}
              >
                <BellAlertIcon className=" w-5 h-5 " />
                {expand && (
                  <span className=" font-medium font-sans text-[13px]">
                    Content Generator
                  </span>
                )}
              </Link>
              <Link
                href={"/ksjds/content-generator"}
                className={`${
                  pathSplit === "content-generator"
                    ? "text-[#000103] bg-[#f3f4f6]  rounded-sm "
                    : "text-[rgb(0,1,3,0.35)]"
                } flex items-center gap-2 px-3 py-3  `}
              >
                <BellAlertIcon className=" w-5 h-5 " />
                {expand && (
                  <span className=" font-medium font-sans text-[13px]">
                    project
                  </span>
                )}
              </Link>
              <Link
                href={"/"}
                className={`${
                  pathSplit === "home"
                    ? "text-[#000103]  bg-[#f3f4f6]  rounded-sm"
                    : "text-[rgb(0,1,3,0.35)]"
                }  flex items-center gap-2 px-3 py-3  `}
              >
                <UserIcon className=" w-5 h-5 " />
                {expand && (
                  <span className=" font-medium font-sans text-[13px]">
                    Business Name Generator
                  </span>
                )}
              </Link>
              {/* <Link
                href={"/"}
                className={`${
                  pathSplit === "home"
                    ? "text-[#000103]   bg-[#f3f4f6]  rounded-sm"
                    : "text-[rgb(0,1,3,0.35)]"
                }  flex items-center gap-2 px-3 py-3  `}
              >
                <WalletIcon className="h-5 w-5 " />
                {expand && (
                  <span className=" font-medium font-sans text-[13px]">
                    Website
                  </span>
                )}
              </Link> */}
            </div>
            <div className=" grow"></div>
            <div className=" relative ">
              <div
                onClick={handleExpand}
                className="absolute right-[-27px]  w-[30px] h-[30px] flex items-center justify-center cursor-pointer bg-white rounded-full"
              >
                {
                  <ChevronRightIcon
                    className={`${
                      expand ? "rotate-180" : "rotate-0"
                    } transition-rotate ease-in-out transform text-[0030AD] text-ai-button-blue w-4 h-4 `}
                  />
                }
              </div>
            </div>
            <div className=" grow"></div>
            <div className=" grow"></div>
            <div className=" ">
              <Link
                href={"/"}
                className={`${
                  pathSplit === "home"
                    ? "text-[#000103] bg-[#f3f4f6]  rounded-sm "
                    : "text-[rgb(0,1,3,0.35)]"
                }  flex items-center gap-2 px-3 py-3 `}
              >
                <HomeIcon className=" w-5 h-5 " />
                {expand && (
                  <span className=" font-medium font-sans text-[13px]">
                    Business
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardSidebar;
