import React from 'react'
import Header from './components/header/header'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom'
function Layout(){
  return (
    // outlet header aur footer fixed rahege
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout
