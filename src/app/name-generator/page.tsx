import React from 'react'
import NavBar from '../crm/_components/nav'
import NameHero from './_components/name-hero'
import SectionTwo from './_components/sectionTwo'
import SectionEight from '../(landingPage)/components/SectionEight'
import SectionNine from '../(landingPage)/components/SectionNine'
import Footer from '../(PricingPayment)/components/Footer'

const page = () => {
  return (
    <div className=' flex flex-col '>
      <NavBar type='white' />
      <NameHero />
      <SectionTwo />
      <SectionEight />
      <SectionNine />
      <Footer />
    </div>
  )
}

export default page