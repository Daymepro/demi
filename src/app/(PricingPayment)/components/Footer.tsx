import { Separator } from '@/components/ui/separator'
import { ArrowDown, Facebook } from 'lucide-react'
import React from 'react'


function Footer() {
  return (
    <div className='xl:px-[140px] md:px-10 px-5 mb-[93px] '>
        <Separator className='mb-12 bg-[#2B2B2B]'/>
        <div className='flex flex-col md:flex-row md:justify-between'>
            <div className='flex flex-col md:mb-0 mb-12 justify-between'>
                <div className='mb-9'>
                    <div className='flex gap-2  lg:max-w-[248px]' >
                        <img src="/images/head-icon.svg" alt="web hero icon"/><h1 className='font-bold'>AIWebHero</h1>
                    </div>
                    <span className='text-sm md:mt-3 '>Ai web hero make owning a business easier than having a job</span>
                </div>
                <span className='text-[rgba(0,1,3,0.70)]'>© 2024 AI Web Hero, Inc.</span>
            </div>
            <div className='flex flex-col md:flex-row gap-[72px]'>
                <div className='flex text-sm flex-col gap-5'>
                    <span className='mb-4 md:text-sm text-xl font-semibold'>Product</span>
                    <span>AI Assistant</span>
                    <span>CRM</span>
                    <span>Invoiving</span>
                    <span>Pricing</span>
                    <span>Website Builder</span>
                </div>
                <div className='flex text-sm flex-col gap-5'>
                    <span className='mb-4 md:text-sm text-xl font-semibold'>Company</span>
                    <span>About</span>
                    <span>Affiliate Program</span>
                    <span>Careers</span>
                    <span>Newsletter</span>
                    <span>Privacy Policy</span>
                    <span>Support</span>
                </div>
                <div>
                    <div>
                        <span className='flex border rounded-sm w-fit border-black px-5 py-3 gap-1'>English <ArrowDown width={16}/></span>
                    </div>
                    <div className='flex gap-1 mt-6'>
                        <img src="/images/x-logo.svg" alt="x logo" />
                        <img src="/images/facebook-logo.svg" alt="facebook logo" />
                        <img src="/images/instagram-logo.svg" alt="instagram logo" />
                        <img src="/images/youtube-logo.svg" alt="Youtube logo" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer