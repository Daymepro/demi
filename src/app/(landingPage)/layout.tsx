import NavBar from '@/components/NavBar'
import React from 'react'

const layout= ({children} : {children: React.ReactNode}) => {
return (
    <div className='  '>
    <NavBar />
    {children}

    </div>
)
}

export default layout