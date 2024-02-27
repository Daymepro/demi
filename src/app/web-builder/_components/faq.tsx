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
    <p> A Starter subscription to AI Web Hero begins at $12 per month, while a Business subscription starts at $20 per month. Each AI Web Hero subscription comes with your website, a custom domain, an AI Assistant, Invoicing, an AI-powered CRM, and additional features.</p>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion className=' bg-[#0D1326] px-3 w-full max-w-[569px]  rounded-[8px]' type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=' w-full text-white'>Can I use an existing domain?</AccordionTrigger>
    <AccordionContent className=' text-white'>
    Yes. You’ll need to adjust a few details with your domain provider, and it takes about five minutes. On the web builder page, enter your custom domain, set up a forwarder on your DNS provider and that's it
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion className=' bg-[#0D1326] px-3 w-full max-w-[569px]  rounded-[8px]' type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=' w-full text-white'>Do you offer white label services?</AccordionTrigger>
    <AccordionContent className=' text-white'>
    Not right now. However, you can build and publish multiple websites from one account with the Pro version
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion className=' bg-[#0D1326] px-3 w-full max-w-[569px]  rounded-[8px]' type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=' w-full text-white'>Can I create an e-commerce website with the AI Web Builder?</AccordionTrigger>
    <AccordionContent className=' text-white'>
      No, not yet
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion className=' bg-[#0D1326] px-3 w-full max-w-[569px]  rounded-[8px]' type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=' w-full text-white'>Are AI Web Hero generated websites safe?</AccordionTrigger>
    <AccordionContent className=' text-white'>
    Yes.
 All domains are hosted on a content delivery network called 
Cloudflare. We chose Cloudflare because they offer fast and secure SSL 
generation, firewalls, and excellent protection from all web attacks 
including DDos.
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion className=' bg-[#0D1326] px-3 w-full max-w-[569px]  rounded-[8px]' type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=' w-full text-white'>Does a custom domain cost extra?</AccordionTrigger>
    <AccordionContent className=' text-white'>
    Nope! Custom domains are free with every Durable subscription and take seconds to create.
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion className=' bg-[#0D1326] px-3 w-full max-w-[569px]  rounded-[8px]' type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=' w-full text-white'>Can I transfer a website to someone else?</AccordionTrigger>
    <AccordionContent className=' text-white'>
    Yes.
 You can add additional users to any website on our platform. Then, you can 
change all account and billing settings to transfer your entire website.
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion className=' bg-[#0D1326] px-3 w-full max-w-[569px]  rounded-[8px]' type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=' w-full text-white'>Can I edit my website’s HTML?</AccordionTrigger>
    <AccordionContent className=' text-white'>AI Web Hero
    is a “no code” solution to building websites. Because of that, we don’t
 offer extensive options for HTML customization. But if you have a 
specific need or request, get in touch with us.
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion className=' bg-[#0D1326] px-3 w-full max-w-[569px]  rounded-[8px]' type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=' w-full text-white'>Can I keep my custom domain if I want to leave AI Web Hero?</AccordionTrigger>
    <AccordionContent className=' text-white'>
    Yes!
 When cancelling your account, simply get in touch with us and we’ll 
arrange to have your custom domain transferred to you. Note that it 
takes a couple of weeks to transfer over.
    </AccordionContent>
  </AccordionItem>
</Accordion>



{/* Can I transfer a website to someone else? */}
        </div>
    </div>
  )
}

export default memo(Faq) 