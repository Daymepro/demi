"use client"

import React from 'react'
import {  AlignJustify } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import NavItem from './nav-item'

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

    ]

  return (
    <>
    <div className='xl:px-[140px] md:px-10 px-5 sticky top-0 lg:flex bg-white hidden justify-between items-center  z-40 lg:py-[30px]'>
        <div className='flex gap-6 items-center'>
            <Link className=' ' href='/'> 
            <div className=' nav-icon text-sm font-semibold mr-4'>
                <img src="/images/logoaiwebherobleuts.svg" alt="nav logo" />
            </div>
            </Link>
            <div className='nav-product '>
                <NavItem label="Product" content={[{name: "Pricing", href: "/pricing"}, {name: "Payment", href: "/payment"}]} />
            </div>
            <div className='nav-resources'>
            <div className=' '>Resources <img className=' inline' src="/images/vuesax-bold-vuesax-bold-arrow-left.svg" alt="drop-down" /></div>

            </div>
            <div className='nav-tools'>
            <div className=' '>Tools <img className=' inline' src="/images/vuesax-bold-vuesax-bold-arrow-left.svg" alt="drop-down" /></div>

            </div>
        </div>
        <div>
            <Link href='/signin'>
            <Button className=' bg-ai-button-blue hover:bg-ai-button-white hover:text-black px-6 py-4 rounded-lg mr-3' >Sign In</Button>
            </Link>
            <Button className=' bg-ai-button-white text-black hover:bg-ai-button-blue hover:text-white px-6 py-4 rounded-lg' >Build your site</Button>
        </div>
    </div>
    <div className='xl:px-[140px] md:px-10  flex lg:hidden items-center justify-between fixed w-full py-4 top-0 left-0  px-5 bg-white'>
        <div><img src="/images/logoaiwebherobleuts.svg" alt="nav logo" /></div>
        <div><AlignJustify/></div>
    </div>

    </>
  )
}

export default NavBar