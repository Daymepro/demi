import React from 'react'
import NavBar from '../crm/_components/nav'
import Hero from './_components/sectionOne'
import Why from './_components/why'
import Weeks from './_components/weeks'
import Professional from './_components/professional'
import SectionNine from '../(landingPage)/components/SectionNine'
import Footer from '../(PricingPayment)/components/Footer'

const page = () => {
  return (
    <div className=' flex overflow-hidden flex-col'>
        <NavBar type='white' />
        <Hero />
        <Why />
        <Weeks />
        <Professional />
        <div className=' max-w-[1148px] w-full mx-auto'>

<SectionNine />
<Footer />
</div>
    </div>
  )
}

export default page