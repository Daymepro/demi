"use client"
import React, { useEffect, useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Cog, PlusIcon } from 'lucide-react'
import clsx from 'clsx'
import { LoadingSpinner } from '@/components/loadingSpinner'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuth } from '@/context/UserContext'
import { apiService } from '@/utils/apiService'
import { useRouter } from 'next/navigation'

type Opportunity = {
  companyName: string;
  id: number;
  websiteId: string;
  url: string;
  favicon: string;
  name: string;
  amount: string;
  description: string;
};
const Preview = () => {
  const router = useRouter()
  const [inputs, setInputs] = useState<Opportunity>({} as Opportunity);
  const [open, setOpen] = useState(false);
  const [expandLoading, setExpandLoading] = useState<number | null>(null);
  const [isLoading, setisLoading] = useState(false);

  const {token} = useAuth()
  const handleSubmit = async () => {
    setisLoading(true);
    try {
      const resp = await apiService.post(
        "/api/MyWebsite/CreateWebsite",
        inputs,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(resp)
      if (resp.succeeded === true) {
        setOpen(false);
        console.log(resp)
        router.push(`/editor/funnels/${resp.website.id}/editor/${resp.website.id}`);
      }
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
    }
  };
  const handleChange = (name: string, value: string) => {
    setInputs((values) => ({ ...values, [name]: value }));
  };
useEffect(() => {
  const get = async () => {
    console.log("ghfg")
    try {
      const resp = await apiService.get(`/api/MyWebsite/Websites?search=""&page=1&pageSize=10`,   {
        Authorization: `Bearer ${token}`,
      })
      console.log(resp)
    } catch (error) {
      
    }    
  }
  get()
}, [])
  const pageDetails = {
    published: true
  }
  return (
    <div className=' flex flex-col' >
      <div className='flex items-center gap-3 self-end'>
      <Dialog open={open} onOpenChange={(open) =>{ setOpen(open); if(!open) setInputs({} as Opportunity); setExpandLoading(null)} }>
          <DialogTrigger className=" bg-[#0330AE] rounded-lg cursor-pointer items-center justify-center p-2 gap-2 w-fit flex text-white">
            {" "}
            <span className=" font-bold text-sm">Create Website</span>
          </DialogTrigger>
          <DialogContent className="  max-w-[408px] w-full rounded-[8px] bg-white  shadow-lg flex flex-col gap-[10px] border p-6 items-center">
            <p>Website</p>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Website name</p>
              <input
                type="text"
                value={inputs.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Company name"
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]  w-full py-2 rounded-[4px]"
              />
            </div>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Description</p>
              <input
                type="text"
                value={inputs.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Description"
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]"
              />
            </div>


            <div className=" w-full">
              <button
                onClick={handleSubmit}
                className="grid place-items-center items-center justify-center w-full bg-ai-button-blue text-white text-sm rounded-[4px] py-3"
              >
                {isLoading ? (
                  <LoadingSpinner divClassName=" w-[20px] h-[20px]" />
                ) : (
                  "Create website"
                )}
              </button>
            </div>
            <div className=" w-full">
              <DialogClose
                onClick={() => setExpandLoading(null)}
                className=" w-full  text-[#8D8D91]  text-sm border-none py-3"
              >
                Cancel
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      <button className='bg-[rgba(3,49,174,0.03)] text-sm font-semibold p-2  rounded-lg text-[rgb(0,48,173)]'>Publish</button>

      </div>
      
      <div className=' rounded-lg w-fit px-3 bg-white'>

        <div className=' flex items-center justify-between px-4 py-3 border-b'>
          <span>famous.aiwebhero.com</span>
        <div className={clsx('px-3 rounded-full text-xs py-2 font-semibold', {'bg-[#ECFDF3]' : pageDetails.published })}>
            {pageDetails.published ? 'Published' : 'Unpublished'}
        </div>

        </div>
     <iframe src={`http://dhds.${process.env.NEXT_PUBLIC_DOMAIN}`} className='w-[500px] aspect-square rounded-lg' frameBorder="0"></iframe>


<Popover>
  <PopoverTrigger className=' flex items-center gap-1 text-[12px] text-[#abac9d] font-bold mt-3'>
 <Cog className=' ' />
    <span>

    Settings
    </span>
  </PopoverTrigger>
  <PopoverContent className=' py-2 px-4 h-fit rounded-md shadow-md'>
    <div>
      <p className='text-sm font-medium'>Change Page Name</p>
      <input type="text" className=' outline-none shadow-none w-full  text-[#8f8f8f] rounded-[8px] border h-9 mt-4 px-2 border-[#8F8F8F]' placeholder='Enter page name' />
    </div>
    <div>
      <p className='text-sm font-medium mt-4'>Change Path name</p>
      <input type="text" placeholder='Enter path name e.g about' className=' outline-none shadow-none border w-full h-9 mt-4 px-2 text-[#8f8f8f] rounded-[8px] border-[#8F8F8F]' />
    </div>
  </PopoverContent>
</Popover>
      </div>
    </div>
  )
}

export default Preview