import NavBar from '@/components/NavBar'
import React from 'react'
import Footer from '../(PricingPayment)/components/Footer'

const layout= ({children} : {children: React.ReactNode}) => {
return (
    <div className=' font-sans'>
    <NavBar />
    {children}
    <Footer />
    </div>
)
}

export default layout