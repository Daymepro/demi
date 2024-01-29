import NavBar from '@/components/NavBar'
import React from 'react'

const layout= ({children} : {children: React.ReactNode}) => {
return (
    <div className='xl:px-[140px] md:px-10 px-5  '>
    <NavBar />
    {children}

    </div>
)
}

export default layout