import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <div className='userNav'>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/community">Community</Link>
    </div>
  )
}

export default Navbar