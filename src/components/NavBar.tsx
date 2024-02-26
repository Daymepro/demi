"use client";

import React from "react";
import { AlignJustify } from "lucide-react";
import { Button } from "./ui/button";
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
import NavItem from "./nav-item";
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
import clsx from "clsx";
function NavBar() {
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
      <div className="xl:px-[140px] md:px-10 px-5 sticky top-0 flex md:backdrop-blur-sm bg-white  justify-between items-center py-[30px]">
        <div className="flex gap-6 items-center">
          <Link className=" " href="/">
            <div className=" nav-icon text-sm font-semibold mr-4">
              <img src="/images/logoaiwebherobleuts.svg" alt="nav logo" />
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-3">
          <div className="nav-product ">
            <NavItem
              label="Product"
              content={[
                { name: "Pricing", href: "/pricing" },
                { name: "Payment", href: "/payment" },
              ]}
            />
          </div>
          <div className="nav-resources">
            <div className=" ">
              Resources{" "}
              <img
                className=" inline"
                src="/images/vuesax-bold-vuesax-bold-arrow-left.svg"
                alt="drop-down"
              />
            </div>
          </div>
          <div className="nav-tools">
            <div className=" ">
              Tools{" "}
              <img
                className=" inline"
                src="/images/vuesax-bold-vuesax-bold-arrow-left.svg"
                alt="drop-down"
              />
            </div>
          </div>
          </div>

        </div>
        <Sheet>
  <SheetTrigger className="md:hidden">
    <AlignJustify  />
  </SheetTrigger>
  <SheetContent className={clsx("md:hidden")} >
  <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className={clsx('',)}>Products</AccordionTrigger>
    <AccordionContent className={clsx('flex flex-col gap-3 pl-5')}>
      <Link  href={'/name-generator'}>AI name generator</Link>
      <Link href={'/content-generator'}>AI content generator</Link>
      <Link href={'/web-builder'}>AI web builder</Link>

    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className={clsx('',)}>Resources</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className={clsx('',)}>Tools</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

  </SheetContent>
</Sheet>
        <div className=" hidden md:block">
          <Link href="/signin">
            <Button className=" bg-ai-button-blue hover:bg-ai-button-white hover:text-black px-6 py-4 rounded-lg mr-3">
              Sign In
            </Button>
          </Link>
          <Button className=" bg-ai-button-white text-black hover:bg-ai-button-blue hover:text-white px-6 py-4 rounded-lg">
            Build your site
          </Button>
        </div>
      </div>

 
      {/* <div className="xl:px-[140px] md:px-10  flex lg:hidden items-center justify-between fixed w-full py-4 top-0 left-0  px-5 bg-white">
        <div>
          <img src="/images/logoaiwebherobleuts.svg" alt="nav logo" />
        </div>
    
      </div> */}
    </>
  );
}

export default NavBar;
