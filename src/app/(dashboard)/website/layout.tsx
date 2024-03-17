import { useAuth } from '@/context/UserContext'
import { redirect } from 'next/navigation'
import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {

  return (
    <div className='' >{children}</div>
  )
}

export default layout