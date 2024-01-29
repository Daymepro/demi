import React from 'react'
import SectionOne from '@/app/(landingPage)/components/SectionOne'
import SectionTwo from './components/SectionTwo'

function page() {
  return (
    <div className='h-full'>
        <SectionOne/>
        <SectionTwo/>
    </div>
  )
}

export default page