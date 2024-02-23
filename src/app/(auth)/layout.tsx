import UserContext from '@/context/UserContext'
import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <UserContext>{children}</UserContext>
  )
}

export default layout