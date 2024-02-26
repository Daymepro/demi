'use client'
import { ThemeProvider } from '@/components/theme-provider'
import { useAuth } from '@/context/UserContext'
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

const layout = ({children} : {children : React.ReactNode}) => {
  const {user, isLoaded} = useAuth()
  useEffect(() => {
    if(!isLoaded) return
    if(!user) {
      redirect('/signin')
    }
  }, [])
  return (
    <ThemeProvider  attribute="class"
    defaultTheme="theme"
    enableSystem
    disableTransitionOnChange={false}>
        {children}
    </ThemeProvider>
  )
}

export default layout