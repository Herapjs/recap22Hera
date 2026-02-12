import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'


function MainLayOut() {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default MainLayOut