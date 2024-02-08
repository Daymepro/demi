import NavBar from "@/components/NavBar";
import React from 'react'
import Footer from "./components/Footer";

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <NavBar/>
      {children}
      <Footer/>
    </div>
  )
}

export default layout