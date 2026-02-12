import React from 'react'
import { NavLink } from 'react-router'

function NavBar() {
  return (
    <div className=' bg-blue-200 text-2xl text-center flex justify-center gap-8'>
        <NavLink to="/" className='hover:text-amber-50 p-5 hover:bg-pink-200 rounded-2xl font-bold'>Home</NavLink>
        <NavLink to="register" className='hover:text-amber-50 p-5 hover:bg-pink-200 rounded-2xl font-bold'>Register</NavLink>
        <NavLink to="post" className='hover:text-amber-50 p-5 hover:bg-pink-200 rounded-2xl font-bold'>Post</NavLink>
    </div>
  )
}

export default NavBar