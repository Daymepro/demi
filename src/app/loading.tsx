import PageLoader from '@/components/pageLoader'
import React from 'react'

const loading = () => {
  return (
    <div className=' w-screen absolute z-[4000000] h-screen'>
        <PageLoader />
    </div>
  )
}

export default loading