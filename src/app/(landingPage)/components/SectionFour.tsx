import { Button } from '@/components/ui/button'
import React from 'react'
import { Zap } from 'lucide-react'
import Image from 'next/image'

function SectionFour() {
  return (
    <div className='xl:px-[140px] md:px-10 px-5 py-12 flex flex-col items-center justify-center '>
        <div className='text-center max-w-lg'>
            <h1 className='text-4xl font-bold mb-3'>Built with AI Web Hero</h1>
            <span className='text-lg text-[rgba(0,1,3,0.60)] '>Join millions of small businesses, owner-operators, and solopreneurs building their businesses on AI Web Hero</span>
            <Button variant={"custom"} className='mt-4 mx-auto flex items-center justify-center gap-2'>
               <Zap fill='white' width={'14px'}/> Generate your website
            </Button>
        </div>
        <div className='grid grid-cols-6 w-full'>
            {/* <div>
              <Image width={300} height={300} src="/images/landing_3_1.svg" alt="background image" />                
            </div> */}
            <div className=' col-span-2 h-[250px] ' >
              <img src="/images/landing_3_1.svg" className="h-full" alt="landing image 1" />
            </div>
            <div className=' col-span-1 h-[250px] '>
                <img src="/images/landing_3_2.svg" className="h-full" alt="landing image 2" />
            </div>
            <div className=' col-span-2 h-[250px] ' >
                <img src="/images/landing_3_8.svg" className="h-full" alt="landing image 3" />
            </div>
            <div className=' col-span-1 h-[250px] '>
                <img src="/images/landing_3_4.svg" className="h-full" alt="landing image 4" />
            </div>
            <div className=' col-span-2 h-[250px] ' >
                <img src="/images/landing_3_3.svg" className="h-full" alt="landing image 5" />
            </div>
            <div className=' col-span-1 h-[250px] ' >
                <img src="/images/landing_3_5.svg" className="h-full" alt="landing image 3" />
            </div>
            <div className=' col-span-1 h-[250px] '>
                <img src="/images/landing_3_6.svg" className="h-full" alt="landing image 4" />
            </div>
            <div className=' col-span-2 h-[250px] ' >
                <img src="/images/landing_3_8.svg" className="h-full" alt="landing image 5" />
            </div>
            
        </div>
    </div>
  )
}

export default SectionFour