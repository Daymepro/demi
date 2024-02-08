import React from 'react'
import SectionOne from '@/app/(landingPage)/components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'

function page() {
  return (
    <div className='h-full'>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
    </div>
  )
}

export default page