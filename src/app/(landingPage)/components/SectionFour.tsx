import { Button } from '@/components/ui/button'
import React from 'react'
import { Zap } from 'lucide-react'

function SectionFour() {
  return (
    <div className='xl:px-[140px] md:px-10 px-5 py-24 flex flex-col items-center justify-center '>
        <div className='text-center max-w-lg'>
            <h1 className='text-4xl font-bold mb-3'>Built with AI Web Hero</h1>
            <span className='text-lg text-[rgba(0,1,3,0.60)] '>Join millions of small businesses, owner-operators, and solopreneurs building their businesses on AI Web Hero</span>
            <Button variant={"custom"} className='mt-4 mx-auto flex items-center justify-center gap-2'>
               <Zap fill='white' width={'14px'}/> Generate your website
            </Button>
        </div>
        <div className='h-[800px]'>
            <div>
                <img src="/images/landing-section-4-1.png" alt="" />
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default SectionFour