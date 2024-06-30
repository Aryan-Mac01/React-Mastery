import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom' //jiske saath use karoge wo cheez same rahegi aur baaki change ho jaaegi


function Layout() {
  return (
    <>
        <Header/>
        <Outlet/> 
        <Footer/>
    </>
  )
}

export default Layout