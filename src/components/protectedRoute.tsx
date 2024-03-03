import { useAuth } from '@/context/UserContext'
import { redirect, usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { getCookie } from 'cookies-next'
const ProtectedRoute = ({children} : {children: React.ReactNode}) => {
    const {isAuthenticated, loading, user, logout} = useAuth()

//   if(user?.twoFactorEnabled === false) {
//     redirect('/onboarding/industry')
//   }
const pathName = usePathname()

useEffect(() => {
  const token = getCookie('token')
  const parseJwt = () => {
    try {
      if(!token) return
      return JSON.parse(atob(token?.split('.')[1]));
    } catch (e) {
      return null;
    }
  };
    if(loading === false && !isAuthenticated ) {
        return redirect(`/signin?next=${pathName}`)
      } 
      const decodedJWT = parseJwt()
      if(decodedJWT) {
        console.log(decodedJWT)
  
        if(decodedJWT.exp * 1000 < Date.now()) {
          logout()
          redirect(`/signin?next=${pathName}`)
        }

      }
}, [loading])
 return (
    <>
      {children}  
    </>
  )
}

export default ProtectedRoute