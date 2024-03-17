"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useRef } from 'react'
import { Zap } from 'lucide-react'
import Image from 'next/image'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';


function SectionFour() {
    const main = useRef<HTMLDivElement>(null);
    
    gsap.registerPlugin(useGSAP, ScrollTrigger);
 
    useGSAP(
        () => {
          const boxes = gsap.utils.toArray('.box');
          boxes.forEach((box: any) => {
            gsap.to(box, {
              x: 100,
              scrollTrigger: {
                trigger: box,
                start: 'top center',
                end: 'top 20%',
                scrub: true,
                toggleActions: "restart none none reverse",
                // markers: true,
              },
            });
          });
        },
        { scope: main }
      );
  return (
    <div className='xl:px-[140px] md:px-10 px-5 py-12 flex flex-col items-center justify-center '>
        <div className='text-center max-w-lg'>
            <h1 className='text-4xl font-bold mb-3'>Built with AI Web Hero</h1>
            <span className='text-lg text-[rgba(0,1,3,0.60)] '>Join millions of small businesses, owner-operators, and solopreneurs building their businesses on AI Web Hero</span>
            <Button variant={"custom"} className='mt-4 mx-auto flex items-center justify-center gap-2'>
               <Zap fill='white' width={'14px'}/> Generate your website
            </Button>
        </div>
        <div  ref={main} className='flex w-full lg:mx-auto   relative lg:overflow-x-scroll overflow-x-hidden remove-scrollbar items-center flex-col '>
            <div className=' flex items-center  max-h-[300px] lg:max-h-[auto]  overflow-y-hidden remove-scrollbar '>
           
            <div className=' col-span-2 md:h-[250px] w-[300px] flex-1 box ' >
                <img src="/images/landing_3_8.svg" className="h-full w-full" alt="landing image 3" />
            </div> 
            <div className=' col-span-1 md:h-[250px] w-[300px] flex-1 box '>
                <img src="/images/landing_3_4.svg" className="h-full w-full" alt="landing image 4" />
            </div>
            <div className=' col-span-2 md:h-[250px] w-[300px] flex-1 box  ' >
                <img src="/images/landing_3_3.svg" className="h-full w-full" alt="landing image 5" />
            </div>
          <div className=' col-span-1 md:h-[250px] w-[300px] flex-1 box' >
                <img src="/images/landing_3_5.svg" className="h-full w-full" alt="landing image 3" />
            </div>
            <div className=' col-span-1 md:h-[250px] w-[300px] flex-1 box '>
                <img src="/images/landing_3_6.svg" className="h-full w-full" alt="landing image 4" />
            </div>
            <div className=' col-span-2 md:h-[250px] w-[300px] flex-1 box ' >
                <img src="/images/landing_3_8.svg" className="h-full w-full" alt="landing image 5" />
            </div>
            </div>
            <div className=' flex items-center'>
            <div  className='  col-span-2 md:h-[250px] w-[300px] flex-1 box  ' >
              <img src="/images/landing_3_1.svg" className="h-full w-full" alt="landing image 1" />
            </div>
            <div className=' col-span-1 md:h-[250px] w-[300px] flex-1 box  '>
                <img src="/images/landing_3_2.svg" className="h-full w-full" alt="landing image 2" />
            </div>
            <div className=' col-span-2 md:h-[250px] w-[300px] flex-1 box ' >
                <img src="/images/landing_3_8.svg" className="h-full w-full" alt="landing image 3" />
            </div> 

            <div className=' col-span-1 md:h-[250px] w-[300px] flex-1 box '>
                <img src="/images/landing_3_6.svg" className="h-full w-full" alt="landing image 4" />
            </div>
            <div className=' col-span-2 md:h-[250px] w-[300px] flex-1 box ' >
                <img src="/images/landing_3_8.svg" className="h-full w-full" alt="landing image 5" />
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default SectionFour