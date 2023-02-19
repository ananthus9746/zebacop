import React from 'react'

import { Link, NavLink } from 'react-router-dom'
// import Home from '../pages/User/Home/Home'
import './Navbar.css'



function Navbar() {


  
  return (
        <nav className='user_nav sticky top-0 left-0 w-full'>

          <div className="">
            <p>Logo</p>
          </div>

          <div className="nav_links">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Projects</NavLink>
            <Link className='inactive'>
              Community
            </Link>
          </div>
          
          

          <NavLink to="/ConnectWallets"  className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            <button className='wllet_btn '>Wallet Connect</button>
          </NavLink>




        </nav>
  )
}

export default Navbar