
import { Button } from '@/components/ui/button'
import { Zap } from 'lucide-react'
import React from 'react'

function page() {
    
  return (
    <div  className=' pt-24 pb-[120px] flex flex-col overflow-x-hidden h-screen overflow-y-scroll '>
        <div className='flex flex-col xl:px-[140px] md:px-10 px-5 text-center  items-center justify-center '>
            <span className='text-xl text-[rgba(0,1,3,0.60)]'>About AI Web Hero</span>
            <h1 className='text-5xl my-4 font-bold'>Subscription plan crafted for you!</h1>
            <span className='text-xl text-[rgba(0,1,3,0.60)]'>Kindly choose your plane to get started with AI Web Hero today !</span>
            <div className='mt-8 flex items-center justify-center gap-3'>
                <span className='text-xl text-[rgba(0,1,3,0.60)]'>Wanna give it a try!</span>
                <span><Button asChild variant={"custom"} className='bg-[rgba(0,48,173,0.04)] text-ai-button-blue underline'>7 days of free trial</Button></span>
            </div>
        </div>
        <div className='w-full xl:px-[140px] md:px-10 px-5 mt-[70px] '>
        <div className=' flex m-auto md:flex-row flex-col max-w-7xl gap-5 items-center justify-center '>
            <div className='card mb-[44px] max-w-[400px] text-white flex-1 gap-x-5 bg-ai-button-blue flex flex-col px-4 py-12 rounded-lg '>
                <div className='card-header flex flex-col '>
                    <h2 className='text-xl font-semibold mb-6'>Most Popular</h2>
                    <span className='text-4xl font-bold relative mx-0 px-0 mb-[14px]'>$4.99 <span className='absolute bottom-1 text-xs font-normal'> /Month</span></span>
                    <span className='text-xs font-normal'>Get Started with basic take off plan</span>
                </div>
                <div className='card-body'>
                    <h2 className='text-sm font-semibold mt-9 mb-6'>Features</h2>
                    <ul className='pl-4 text-xs leading-5' style={{listStyle: 'unset'}} >
                        <li>Unlimited Numbers (up to 1K)</li>
                        <li>Free SMS and Broadcast</li>
                        <li>Easy Configuration with up to 5 Server</li>
                        <li>Easy and Editable Workspace</li>
                        <li>Unlimited No. of agent</li>
                        <li>Easy Scheduling and Appointment</li>
                        <li>Easy Connection with mobile phones up to 3</li>
                        <li>Unlimited Numbers (up to 1K)</li>
                        <li>Free SMS and Broadcast</li>
                        <li>Easy Configuration with up to 5 Server</li>
                        <li>Easy and Editable Workspace</li>
                        <li>Unlimited No. of agent</li>
                        <li>Easy Scheduling and Appointment</li>
                        <li>Easy Connection with mobile phones up to 3</li>
                    </ul>
                </div>
                <div className='card-footer mt-6'>
                    <Button asChild className='w-full font-bold text bg-white text-ai-button-blue' variant={"custom"}>Choose Plan</Button>
                </div>
            </div>
            <div className='card max-w-[400px] text-[#000103] flex-1 gap-x-5 bg-[#F4F4F5] flex flex-col px-4 py-12 rounded-lg '>
                <div className='card-header flex flex-col '>
                    <h2 className='text-xl font-semibold mb-6'>Basic Plan</h2>
                    <span className='text-4xl font-bold relative mx-0 px-0 mb-[14px]'>$4.99 <span className='absolute bottom-1 text-xs font-normal'> /Month</span></span>
                    <span className='text-xs font-normal'>Get Started with basic take off plan</span>
                </div>
                <div className='card-body'>
                    <h2 className='text-sm font-semibold mt-9 mb-6'>Features</h2>
                    <ul className='pl-4 text-xs leading-5' style={{listStyle: 'unset'}} >
                        <li>Unlimited Numbers (up to 1K)</li>
                        <li>Free SMS and Broadcast</li>
                        <li>Easy Configuration with up to 5 Server</li>
                        <li>Easy and Editable Workspace</li>
                        <li>Unlimited No. of agent</li>
                        <li>Easy Scheduling and Appointment</li>
                        <li>Easy Connection with mobile phones up to 3</li>
                        <li>Unlimited Numbers (up to 1K)</li>
                        <li>Free SMS and Broadcast</li>
                        <li>Easy Configuration with up to 5 Server</li>
                        <li>Easy and Editable Workspace</li>
                        <li>Unlimited No. of agent</li>
                        <li>Easy Scheduling and Appointment</li>
                        <li>Easy Connection with mobile phones up to 3</li>
                    </ul>
                </div>
                <div className='card-footer mt-6'>
                    <Button asChild className='w-full font-bold text bg-ai-button-blue text-white' variant={"custom"}>Choose Plan</Button>
                </div>
            </div>
                <div className='card max-w-[400px] text-[#000103] flex-1 gap-x-5 bg-[#F4F4F5] flex flex-col px-4 py-12 rounded-lg '>
                <div className='card-header flex flex-col '>
                    <h2 className='text-xl font-semibold mb-6'>Basic Plan</h2>
                    <span className='text-4xl font-bold relative mx-0 px-0 mb-[14px]'>$4.99 <span className='absolute bottom-1 text-xs font-normal'> /Month</span></span>
                    <span className='text-xs font-normal'>Get Started with basic take off plan</span>
                </div>
                <div className='card-body'>
                    <h2 className='text-sm font-semibold mt-9 mb-6'>Features</h2>
                    <ul className='pl-4 text-xs leading-5' style={{listStyle: 'unset'}} >
                        <li>Unlimited Numbers (up to 1K)</li>
                        <li>Free SMS and Broadcast</li>
                        <li>Easy Configuration with up to 5 Server</li>
                        <li>Easy and Editable Workspace</li>
                        <li>Unlimited No. of agent</li>
                        <li>Easy Scheduling and Appointment</li>
                        <li>Easy Connection with mobile phones up to 3</li>
                        <li>Unlimited Numbers (up to 1K)</li>
                        <li>Free SMS and Broadcast</li>
                        <li>Easy Configuration with up to 5 Server</li>
                        <li>Easy and Editable Workspace</li>
                        <li>Unlimited No. of agent</li>
                        <li>Easy Scheduling and Appointment</li>
                        <li>Easy Connection with mobile phones up to 3</li>
                    </ul>
                </div>
                <div className='card-footer mt-6'>
                    <Button className='w-full font-bold text bg-ai-button-blue text-white' variant={"custom"}>Choose Plan</Button>
                </div>
            </div>
        </div>
        </div>
        <div className='xl:px-[140px] md:px-10 px-5'>
            <div className='md:flex-row flex-col px-7 items-center max-w-7xl mx-auto py-10 flex rounded-lg mt-[108px] bg-white gap-5 md:bg-[#F9FAFB]'>
                <div className='flex-1 max-w-[400px] text-[#000103] border-0 md:border-r border-[#0030AD] more-features-card rounded-lg px-8 bg-white py-9'>
                    <h2 className='text-sm font-semibold mt-9 mb-6'>More Features</h2>
                    <ul className='pl-4 text-xs leading-5' style={{listStyle: 'unset'}} >
                        <li>Unlimited Numbers (up to 1K)</li>
                        <li>Free SMS and Broadcast</li>
                        <li>Easy Configuration with up to 5 Server</li>
                        <li>Easy and Editable Workspace</li>
                        <li>Unlimited No. of agent</li>
                        <li>Easy Scheduling and Appointment</li>
                        <li>Easy Connection with mobile phones up to 3</li>
                        <li>Unlimited Numbers (up to 1K)</li>
                        <li>Free SMS and Broadcast</li>
                        <li>Easy Configuration with up to 5 Server</li>
                        <li>Easy and Editable Workspace</li>
                        <li>Unlimited No. of agent</li>
                        <li>Easy Scheduling and Appointment</li>
                        <li>Easy Connection with mobile phones up to 3</li>
                    </ul>
                </div>
                <div className='flex-1 md:block hidden max-w-[400px] text-[#000103] border-0 md:border-r border-[#0030AD] more-features-card rounded-lg px-8 bg-white py-9'>
                    <h2 className='text-sm font-semibold mt-9 mb-6'>More Features</h2>
                    <ul className='pl-4 text-xs leading-5' style={{listStyle: 'unset'}} >
                        <li>Unlimited Numbers (up to 1K)</li>
                        <li>Free SMS and Broadcast</li>
                        <li>Easy Configuration with up to 5 Server</li>
                        <li>Easy and Editable Workspace</li>
                        <li>Unlimited No. of agent</li>
                        <li>Easy Scheduling and Appointment</li>
                        <li>Easy Connection with mobile phones up to 3</li>
                        <li>Unlimited Numbers (up to 1K)</li>
                        <li>Free SMS and Broadcast</li>
                        <li>Easy Configuration with up to 5 Server</li>
                        <li>Easy and Editable Workspace</li>
                        <li>Unlimited No. of agent</li>
                        <li>Easy Scheduling and Appointment</li>
                        <li>Easy Connection with mobile phones up to 3</li>
                    </ul>
                </div>
                <div className='flex-1 md:block hidden max-w-[400px] text-[#000103] border-0 md:border-r border-[#0030AD] more-features-card rounded-lg px-8 bg-white py-9'>
                    <h2 className='text-sm font-semibold mt-9 mb-6'>More Features</h2>
                    <ul className='pl-4 text-xs leading-5' style={{listStyle: 'unset'}} >
                        <li>Unlimited Numbers (up to 1K)</li>
                        <li>Free SMS and Broadcast</li>
                        <li>Easy Configuration with up to 5 Server</li>
                        <li>Easy and Editable Workspace</li>
                        <li>Unlimited No. of agent</li>
                        <li>Easy Scheduling and Appointment</li>
                        <li>Easy Connection with mobile phones up to 3</li>
                        <li>Unlimited Numbers (up to 1K)</li>
                        <li>Free SMS and Broadcast</li>
                        <li>Easy Configuration with up to 5 Server</li>
                        <li>Easy and Editable Workspace</li>
                        <li>Unlimited No. of agent</li>
                        <li>Easy Scheduling and Appointment</li>
                        <li>Easy Connection with mobile phones up to 3</li>
                    </ul>
                </div>
                
            </div>
        </div>
        <div className="xl:px-[140px] md:px-10 px-0">
            <div className='w-full md:rounded-[20px]  m-auto py-[100px] mt-20 pl-14 pr-10 text-white max-w-7xl flex flex-col-reverse md:flex-row  items-center justify-center md:text-left text-center md:justify-between' style={{background: 'radial-gradient(397.7% 68.45% at 82.01% 39.49%, #1100D4 0%, #0030AD 100%)'}}>
                <div className='max-w-[550px] w-full items-center  md:items-start flex flex-col' >
                    <h1 className='font-bold text-4xl mb-3'>Try AIWeb Hero for free today</h1>
                    <span className='mb-4 text-xl text-[rgba(255,255,255,0.80)]'>Build a website and get your business online in minutes.
                    <br/> No credit Card required.
                    </span>
                    <Button variant={"custom"} className='mt-4  flex items-center justify-center bg-white text-[#000103] gap-2'>
                        <Zap fill='#000103' width={'14px'} height={'20px'}/> Generate your website
                    </Button>
                </div>
                <div className='w-[400px] '>h</div>
            </div>
        </div>
        <div></div>

    </div>
  )
}

export default page