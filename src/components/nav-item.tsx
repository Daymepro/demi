"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { useState, useEffect } from 'react';

interface NavContent {
    name: string;
    href: string;
}
interface navItem {
    label: string
    content: NavContent[]
}

const NavItem:React.FC<navItem> = ({label, content}) => {
    const [isMounted, setIsMounted] = useState(false);
    const pathName = usePathname()
    
    useEffect(() => {
        setIsMounted(true);
    }, [])
    if (!isMounted) {
        return null
    }
    return (
    <div className='group relative  '>
        <button className=' '>{label} <img className=' inline' src="/images/vuesax-bold-vuesax-bold-arrow-left.svg" alt="drop-down" /></button>
        
        <div className='hidden bg-gray-100  rounded-md z-10 group-hover:block absolute'>
            {content.map((item, index) => (
                <Link key={index} className='text-sm text-slate-700   '  href={item.href}>
                    <div className={`w-28 ${pathName === item.href ? "bg-gray-300 hover:bg-gray-400" : ""} px-3 py-2 hover:bg-gray-200 transition rounded-md `}> 
                    {item.name}
            </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default NavItem