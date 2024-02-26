"use client"
import Link from 'next/link'
import React, { memo } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Faq = () => {
  return (
    <div className=' py-20 flex items-center  flex-col justify-center px-2'>
        <div className=' flex flex-col items-center'>
            <p className=' text-white font-bold md:text-[39px] text-[24px] '>Frequently Asked Questions</p>
            <div className=' flex'>
            <p className=' text-white '>Can't find the answers ? </p><Link href={'#'} className='text-white underline'>Contact support</Link>

            </div>
        </div>
        <div className='  max-w-[1189px] grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center w-full mx-auto mt-20'>
        <Accordion className=' bg-[#0D1326] border-b-0 px-3 w-full max-w-[569px] rounded-[8px]' type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=' w-full text-white'>What does a AI web hero cost?</AccordionTrigger>
    <AccordionContent className=' text-white'>
      
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion className=' bg-[#0D1326] px-3 w-full max-w-[569px]  rounded-[8px]' type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=' w-full text-white'>Does a custom domain cost extra?</AccordionTrigger>
    <AccordionContent className=' text-white'>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion className=' bg-[#0D1326] px-3 w-full max-w-[569px]  rounded-[8px]' type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=' w-full text-white'>Does a custom domain cost extra?</AccordionTrigger>
    <AccordionContent className=' text-white'>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion className=' bg-[#0D1326] px-3 w-full max-w-[569px]  rounded-[8px]' type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=' w-full text-white'>Does a custom domain cost extra?</AccordionTrigger>
    <AccordionContent className=' text-white'>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion className=' bg-[#0D1326] px-3 w-full max-w-[569px]  rounded-[8px]' type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=' w-full text-white'>Does a custom domain cost extra?</AccordionTrigger>
    <AccordionContent className=' text-white'>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion className=' bg-[#0D1326] px-3 w-full max-w-[569px]  rounded-[8px]' type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=' w-full text-white'>Does a custom domain cost extra?</AccordionTrigger>
    <AccordionContent className=' text-white'>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
        </div>
    </div>
  )
}

export default memo(Faq) 