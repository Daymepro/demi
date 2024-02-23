import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Cog } from 'lucide-react'
import clsx from 'clsx'

const Preview = () => {

  const pageDetails = {
    published: true
  }
  return (
    <div className=' flex flex-col' >
      <div className=' self-end'>
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