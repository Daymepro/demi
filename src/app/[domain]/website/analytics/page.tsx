import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EyeIcon, PaintBrushIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { useAuth } from "@/context/UserContext";

const analytics = [
  {
    name: "Online users",
    content: 0,
  },
  {
    name: "Online users",
    content: 0,
  },
  {
    name: "Page views",
    content: 5,
  },
]
const analyticsTwo = [
  {
    name: "Devices",
    content: 'No of visits in the last 15 days',
  },
  {
    name: "Pages",
    content: 'No of visits in the last 15 days',
  },
  {
    name: "Pages",
    content: 'No of visits in the last 15 days',
  },
]
const Analytics = () => {
  // const {user} = useAuth()
  // console.log(user)

  return (
    <main className="overflow-scroll h-full pb-[70px] max-h-screen ">
      <div className=" flex justify-between">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Last 15 days" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <div  className=" bg-[#0330AE] rounded-lg cursor-pointer items-center justify-center p-2 gap-2 w-fit flex text-white">
          <span className=" font-bold text-sm">Edit website</span>
          <PaintBrushIcon className=" w-4 h-4 text-white" />
      </div>
      </div>
      <div className=" flex flex-col mt-[52px] items-center justify-center w-full ">
        <div className=" max-w-[792px] w-full flex flex-col gap-14">
      <div className=" flex flex-wrap gap-4 ">
        {analytics.map((item, index) => (
          <div key={index} className="flex rounded-[8px] shadow-md  items-center max-w-[366px] justify-between w-full px-6 py-[20px]">
            <div>
              <p className=" text-[rgb(0,1,3)]">{item.name}</p>
              <p className="text-[rgb(0,48,173)] text-[2rem] font-bold">{item.content}</p>
            </div>
            <div className=" rounded-[4px] bg-[rgba(0,48,173,0.03)]">
              <EyeIcon className=" w-5 h-5 text-[rgba(0,48,173,0.74)]" />
            </div>
          </div>
        ))}
      </div>
      <div className=" flex flex-wrap gap-4 ">
        {analyticsTwo.map((item, index) => (
          <div key={index} className="flex rounded-[8px] shadow-md  items-center max-w-[366px] justify-between w-full px-6 py-[20px]">
            <div>
              <p className=" text-[#00010399]">{item.name}</p>
              <p className="text-[#000103]  font-medium">{item.content}</p>
            </div>
            <Link href={'#'} className=" underline text-black font-medium text-[13px]">
              Views
            </Link>
          </div>
        ))}
      </div>
        <div className=" flex w-full rounded-[8px] shadow-md border h-[517px] flex-wrap gap-4 ">
       
      </div>
      <div className=" flex w-full rounded-[8px] shadow-md border h-[283px] flex-wrap gap-4 ">
       
       </div>

        </div>

      </div>
   
    </main>
  );
};

export default Analytics;
