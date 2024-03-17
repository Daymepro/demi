"use client";

import React from "react";
import { AlignJustify, ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import NavItem from "@/components/nav-item";
import clsx from "clsx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


type Props = {
  type: 'dark' | 'white' 
}
function NavBar(props?: Props) {
  const navItems = [
    {
      name: "Product",
      href: "/product",
    },
    {
      name: "Resources",
      href: "/resources",
    },
    {
      name: "Tools",
      href: "/tools",
    },
  ];

  return (
    <>
      <div className={clsx("xl:px-[140px] md:px-10 px-5 sticky top-0 flex md:backdrop-blur-sm bg-tranparent  justify-between items-center  py-[30px]", {
      })} >
<div className="flex gap-6 items-center">
          <Link className=" " href="/">
          <div className=" nav-icon text-sm font-semibold mr-4">
              {
              
              props?.type === 'white' ? <img src="/images/logoaiwebherobleuts.svg" alt="nav logo" /> : <img src="/iconwhite.svg" alt="nav logo" />
              }
              
            </div>
          </Link>
          <div className=" hidden lg:flex gap-6 justify-between items-center ">
          <div className={clsx("  flex-row gap-2 flex items-center", {
            "text-black": props?.type === 'white',
            "text-white": props?.type === 'dark'
          })}>
          <NavItem
              label="Product"
              content={[
                { name: "Pricing", href: "/pricing" },
                { name: "AI Web Builder", href: "/web-builder" },
                { name: "Content Creation", href: "/content-builder" },
                 { name: "CRM", href: "/name-generator" },

              ]}
            />
             <ChevronDown className=" w-4 h-4" />
          </div>
          <div className={clsx("  flex-row gap-2 flex items-center", {
            "text-black": props?.type === 'white',
            "text-white": props?.type === 'dark'
          })}>
            <span>
              Resources{" "}

            </span>
             <ChevronDown className=" w-4 h-4" />
          </div>
          <div className={clsx("  flex-row gap-2 flex items-center", {
            "text-black": props?.type === 'white',
            "text-white": props?.type === 'dark'
          })}>
            <span>
              Tools{" "}

            </span>
              <ChevronDown className=" w-4 h-4" />

          </div>
          </div>
          </div>
         
        <div className=" hidden lg:block">
          <Link href="/signin">
            <Button className={clsx(" bg-[#141826] hover:bg-ai-button-white hover:text-black px-6 py-4 rounded-lg mr-3 border-ai-button-blue border", 
            {
              "bg-ai-button-blue text-white": props?.type === 'white',
              "text-white": props?.type === 'dark'
            })}>
              Sign In
            </Button>
          </Link>
          <Link href={'/onboarding/industry'} className={clsx(" bg-white text-black hover:bg-ai-button-blue hover:text-white px-6 py-4 rounded-lg", {
            "border border-[rgb(206,212,228)]": props?.type === 'white'
          })}>
            Build your site
          </Link>
        
        </div>
        <Sheet>
  <SheetTrigger className="lg:hidden">
    <AlignJustify className={clsx({'text-white': props?.type === 'dark'})} />
  </SheetTrigger>
  <SheetContent className={clsx("lg:hidden",{"bg-[rgb(30,30,30)]": props?.type === 'dark'})} >
  <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className={clsx('',{
      "text-white border-l-0": props?.type === 'dark'
    })}>Products</AccordionTrigger>
    <AccordionContent className={clsx('flex flex-col gap-3 pl-5',{
      "text-white": props?.type === 'dark'
    })}>
      <Link  href={'/name-generator'}>AI name generator</Link>
      <Link href={'/content-generator'}>AI content generator</Link>
      <Link href={'/web-builder'}>AI web builder</Link>

    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className={clsx('',{
      "text-white": props?.type === 'dark'
    })}>Resources</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className={clsx('',{
      "text-white": props?.type === 'dark'
    })}>Tools</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

  </SheetContent>
</Sheet>

      </div>
      {/* <div className="xl:px-[140px] md:px-10  flex lg:hidden items-center justify-between fixed w-full py-4 top-0 left-0  px-5 bg-white">
        <div>
          <img src="/images/logoaiwebherobleuts.svg" alt="nav logo" />
        </div>
        <div>
          <AlignJustify />
        </div>
      </div> */}
    </>
  );
}

export default NavBar;
