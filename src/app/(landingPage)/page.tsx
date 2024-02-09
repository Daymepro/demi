import React from 'react'
import SectionOne from '@/app/(landingPage)/components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
import SectionFive from './components/SectionFive'
import SectionSeven from './components/SectionSeven'
import SectionSix from './components/SectionSix'

function page() {
  return (
    <div className='h-full'>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
        <SectionSeven/>
    </div>
  )
}

export default page