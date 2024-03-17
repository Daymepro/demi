'use client'
import { ChatBubbleLeftRightIcon, PaintBrushIcon } from '@heroicons/react/16/solid'
import { BuildingOffice2Icon } from '@heroicons/react/24/outline'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import React, { useState } from 'react'



const domains = [
    {
      domain: 'bestfamous.org',
      available: true
    },
    {
      domain: 'bestfamous.com',
      available: false

    },
    {
      domain: 'bestfamous.net',
      available: true

    },
    {
      domain: 'bestfamous.co',
      available: true

    },
]

const Domain = () => {
    const [expanded, setExpanded] = useState<Record<number, boolean>>({})
const toggleExpanded = (index: number) => {
    setExpanded(prev => ({
        ...prev, [index]: !prev[index]
    }))

}
  return (
    <main className=' flex gap-10  h-full max-h-screen pb-[120px]  overflow-y-scroll   items-center flex-col'>
        <div className=' flex self-end items-center gap-3'>
            <button className='bg-[rgba(3,49,174,0.03)] text-sm font-semibold p-2  rounded-lg text-[rgb(0,48,173)]'>Publish</button>
            <button className=' text-white flex items-center gap-1 p-2
             rounded-lg bg-ai-button-blue '><span className=' text-sm font-semibold'>Edit</span>
            
           <PaintBrushIcon className=' w-4 h-4' /> </button>
        </div>
        
        <div className='max-w-[593px] p-4 bg-white  w-full rounded-[16px] flex flex-col'>
            <div className='  w-full flex flex-col gap-6'>
            <p className=' font-bold text-[#000103]'>Domain</p>
            <div className=' flex flex-col gap-2'>
            <div className=' px-[37px] py-[20px] flex flex-col justify-between items-center rounded-[8px] bg-[#F9FAFB]'>
                    <div className=' flex items-center gap-3'>

                       <div className=' bg-white rounded-lg p-5'>
                          <BuildingOffice2Icon className=' w-4 h-4 text-ai-button-blue'  />
                          
                       </div>
                       <div>
                           <p className=' font-bold text-[20px] '>Current domain</p>
                           <p className=' font-normal text-base'>Make your website standout with free custom domain</p>
                       </div>
                    </div>

           
               </div>
          
               <div  className=' text-ai-button-blue py-[20px] px-[31px] bg-[#F5FBFF] w-full flex items-center justify-between font-bold text-sm'>
                    <div className=' flex gap-2 items-center'>
                      <span className=' text-[13px] font-bold'>famous9.aiwebhero.com</span>
                      <div className=' flex items-center gap-2 bg-[#d1faee]  rounded-[48px] w-fit px-3 py-1 h-fit'>
                        <div className=' rounded-full w-1 h-1 bg-[#008950]'></div>
                        <p className=' text-[#008950] font-semibold text-xs'>primary</p>

                      </div>
                    </div>
                    <span className=' text-ai-button-blue font-bold text-[13px]'>Manage</span>

                 </div>
                 <div  className=' border-b border-b-[rgb(245,245,245)] py-[20px]'>
                 <p className=' font-bold text-[20px]'>Custom domain</p>

                 </div>
                 <div className=' flex items-center py-1 bg-[#F9FAFB] px-3 rounded-[6px] '>
                 <input type="text" placeholder='Search for a custom domain' className=' bg-transparent border-none shadow-none outline-none w-full h-full' />
                 <button className=' bg-[#0330AE0F]  px-[27px]  py-[22px] rounded-lg font-semibold text-xs text-ai-button-blue'>Search</button>

                 </div>
                 <div className=' mt-[30px] flex gap-3 max-h-[400px] overflow-y-scroll flex-col'>
                  {domains.map((item, index) => (
                    <div key={index} className='bg-[#0030AD03]  py-[18px] px-[27px] justify-between w-full flex items-center rounded-[8px]'>
                      <div className=' flex items-center gap-3'>
                      <svg
                    width="12.023438"
                    height="12.000000"
                    viewBox="0 0 12.0234 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Vector"
                      d="M11.7598 5.2453L10.9473 4.29516C10.7969 4.11476 10.6719 3.778 10.6719 3.53746L10.6719 2.51516C10.6719 1.87773 10.1484 1.35455 9.50977 1.35455L8.48828 1.35455C8.24805 1.35455 7.9043 1.22826 7.72461 1.07792L6.77344 0.266098C6.35938 -0.0886993 5.67969 -0.0886993 5.26562 0.266098L4.30273 1.07792C4.12305 1.22826 3.78516 1.35455 3.54492 1.35455L2.50391 1.35455C1.86719 1.35455 1.34375 1.87773 1.34375 2.51516L1.34375 3.53746C1.34375 3.77199 1.22461 4.10875 1.07422 4.28915L0.261719 5.2453C-0.0878906 5.66625 -0.0878906 6.33976 0.261719 6.74868L1.07422 7.70484C1.22461 7.87923 1.34375 8.222 1.34375 8.45653L1.34375 9.48484C1.34375 10.1223 1.86719 10.6455 2.50391 10.6455L3.55078 10.6455C3.78516 10.6455 4.12891 10.7717 4.30859 10.9221L5.25977 11.7339C5.67383 12.0887 6.35352 12.0887 6.76758 11.7339L7.71875 10.9221C7.89844 10.7717 8.23633 10.6455 8.47656 10.6455L9.49805 10.6455C10.1367 10.6455 10.6582 10.1223 10.6582 9.48484L10.6582 8.46254C10.6582 8.222 10.7852 7.88524 10.9355 7.70484L11.748 6.7547C12.1133 6.34578 12.1133 5.66625 11.7598 5.2453ZM5.55859 3.67577C5.55859 3.42922 5.76367 3.22476 6.00977 3.22476C6.25781 3.22476 6.46094 3.42922 6.46094 3.67577L6.46094 6.58031C6.46094 6.82686 6.25781 7.03132 6.00977 7.03132C5.76367 7.03132 5.55859 6.82686 5.55859 6.58031L5.55859 3.67577ZM6.00977 8.9316C5.67969 8.9316 5.4082 8.66099 5.4082 8.33024C5.4082 7.9995 5.67383 7.72889 6.00977 7.72889C6.3418 7.72889 6.61133 7.9995 6.61133 8.33024C6.61133 8.66099 6.34766 8.9316 6.00977 8.9316Z"
                      fill="#1E63A2"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <span className=' font-bold text-[#000103] text-[20px]'>{item.domain}</span>
                    {item.available === true ? <div className=' bg-[#D1FAEE]  rounded-[48px] flex items-center px-4 gap-2 py-3'>
                      <div className=' rounded-full w-1 h-1 bg-[#008950]'></div>
                        <span className=' text-[#008950] font-semibold text-xs'>available</span>
                    </div> : <div className=' bg-[#f03d468e] rounded-[48px] flex items-center gap-2 px-4 py-3'>
                    <div className=' rounded-full w-1 h-1 bg-[#662424]'></div>

                        <span className=' text-[#662424] font-semibold text-xs'>unavailable</span>
                    </div> }
                      </div>
       
                      <AlertDialog>
  <AlertDialogTrigger className='  bg-ai-button-blue text-white rounded-[8px] text-sm font-bold px-6 py-4  '>Get it</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Custom domain is not included in your plan</AlertDialogTitle>
      <AlertDialogDescription suppressHydrationWarning>
       <div className=' w-full rounded-[8px] bg-[#F9FAFB] px-3 py-4'>
       Upgrade to get a free custom domain.
       </div>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel className='bg-[#0330AE0F] text-ai-button-blue'>Cancel</AlertDialogCancel>
      <AlertDialogAction className='bg-ai-button-blue font-bold text-[13px]'>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

                    </div>
                  ))}
                 </div>
                 <div className=' border-b border-b-[rgb(245,245,245)] py-[20px]'>
                  <span className=' text-ai-button-blue font-semibold '>View more suggestions</span>
                 </div>
                 <div>
                  <p className=' font-bold text-[rgb(0,1,3)]'>Existing domain</p>
                  <div className=' bg-[#f5fbbff] flex justify-between mt-6 rounded-[4px]'>
                    <p className=' w-[75%] text-[#00010380] font-bold text-[13px]'>

                  Link your existing domain name with Entri. it’s fast and secure. <span className=' text-main-blue'> Learn more</span>
                    </p>
                    <button className='bg-[rgba(3,49,174,0.03)] text-sm font-semibold p-2  rounded-lg text-[rgb(0,48,173)]'>Link domain</button>

                  </div>
                 </div>
            </div>
                

            </div>
        </div>


    </main>
  )
}

export default Domain