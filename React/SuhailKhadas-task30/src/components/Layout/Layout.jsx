import React from 'react'
import {Footer, Navigation} from '../index'
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className='p-0 m-0'>
      <Navigation/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
