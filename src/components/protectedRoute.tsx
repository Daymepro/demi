import { useAuth } from '@/context/UserContext'
import { redirect, usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useLayoutEffect } from 'react'
import { getCookie } from 'cookies-next'
const ProtectedRoute = ({children} : {children: React.ReactNode}) => {
    const {isAuthenticated, loading, user, logout, token} = useAuth()


const pathName = usePathname()
const router = useRouter()
useEffect(() => {
  const parseJwt = () => {
    try {
      if(!token) return
      return JSON.parse(atob(token?.split('.')[1]));
    } catch (e) {
      return null;
    }
  };
    if(loading === false && !isAuthenticated ) {
        return router.replace(`/signin?next=${pathName}`)
      } 
      const decodedJWT = parseJwt()
      if(decodedJWT) {
  
        if(decodedJWT.exp * 1000 < Date.now()) {
          logout()
          router.replace(`/signin?next=${pathName}`)
        }

      }
}, [loading])
 return (
    <>
      {loading ? <></> : children}  
    </>
  )
}

export default ProtectedRoute