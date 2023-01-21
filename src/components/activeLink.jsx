import React from 'react'
import { NavLink } from 'react-router-dom'

function ActiveLink() {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='about'>About</NavLink>
    </nav>

  )
}

export default ActiveLink