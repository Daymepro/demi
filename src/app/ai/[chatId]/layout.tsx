import { ThemeProvider } from '@/components/theme-provider'
import React from 'react'

const layout = ({children} : {children : React.ReactNode}) => {
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