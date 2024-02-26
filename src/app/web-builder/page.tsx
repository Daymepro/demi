import React from 'react'
import SectionOne from './_components/sectionone'
import NavBar from './_components/nav'
import SectionTwo from './_components/sectiontwo'
import SectionThree from './_components/sectionThree'
import SectionFour from './_components/sectionFour'
import Sectionfive from './_components/sectionfive'
import Faq from './_components/faq'
import SectionNine from '../(landingPage)/components/SectionNine'
import Footer from '../(PricingPayment)/components/Footer'
import { ArrowDown } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const page = () => {
  return (
    <div className=' flex flex-col bg-[rgb(30,30,30)] overflow-x-hidden'>
        <NavBar type='dark' />

        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Sectionfive />
        <Faq />
        <div className=' max-w-[1148px] w-full mx-auto'>

        <SectionNine />
        </div>
        <div className=' md:px-10 px-5 mb-[93px] '>
        <Separator className='mb-12 bg-[#2B2B2B] text-white'/>
        <div className='flex flex-col md:flex-row md:justify-between'>
            <div className='flex flex-col md:mb-0 mb-12 justify-between'>
                <div className='mb-9'>
                    <div className='flex gap-2  lg:max-w-[248px]' >
                        <img src="/images/head-icon.svg" alt="web hero icon"/><h1 className='font-bold text-white'>AIWebHero</h1>
                    </div>
                    <span className='text-sm text-white md:mt-3 '>Ai web hero make owning a business easier than having a job</span>
                </div>
                <span className='text-white'>© 2024 AI Web Hero, Inc.</span>
            </div>
            <div className='flex flex-col md:flex-row gap-[72px]'>
                <div className='flex text-sm text-white flex-col gap-5'>
                    <span className='mb-4 md:text-sm text-xl font-semibold'>Product</span>
                    <span>AI Assistant</span>
                    <span>CRM</span>
                    <span>Invoiving</span>
                    <span>Pricing</span>
                    <span>Website Builder</span>
                </div>
                <div className='flex text-white text-sm flex-col gap-5'>
                    <span className='mb-4 md:text-sm text-xl font-semibold'>Company</span>
                    <span>About</span>
                    <span>Affiliate Program</span>
                    <span>Careers</span>
                    <span>Newsletter</span>
                    <span>Privacy Policy</span>
                    <span>Support</span>
                </div>
                <div className=' text-white'>
                    <div>
                        <span className='flex border border-white rounded-sm w-fit px-5 py-3 gap-1'>English <ArrowDown width={16}/></span>
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
    </div>
  )
}

export default page