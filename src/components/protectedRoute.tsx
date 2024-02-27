import { useAuth } from '@/context/UserContext'
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

const ProtectedRoute = ({children} : {children: React.ReactNode}) => {
    const {isAuthenticated, loading, user} = useAuth()

//   if(user?.twoFactorEnabled === false) {
//     redirect('/onboarding/industry')
//   }
useEffect(() => {
    if(loading === false && !isAuthenticated ) {
        return redirect('/signin')
      } 
}, [loading])
 return (
    <>
      {children}  
    </>
  )
}

export default ProtectedRoute