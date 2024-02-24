import React from 'react'
import SectionOne from '@/app/(landingPage)/components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
import SectionFive from './components/SectionFive'
import SectionSix from './components/SectionSix'
import SectionSeven from './components/SectionSeven'
import SectionEight from './components/SectionEight'
import SectionNine from './components/SectionNine'

function page() {
  return (
    <div className='remove-scrollbar '>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
        <SectionSeven/>
        <SectionEight />
        <SectionNine />
    </div>
  )
}

export default page