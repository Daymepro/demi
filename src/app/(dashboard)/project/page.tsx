import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
    redirect('/project/project')
  return (
    <div></div>
  )
}

export default page