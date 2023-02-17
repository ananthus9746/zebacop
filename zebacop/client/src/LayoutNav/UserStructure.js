import React from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom'
import Home from '../pages/User/Home/Home'
import './UserStructure.css'
import Navbar from '../components/Navbar/Navbar'

function UserStructure() {
  return (
    <>

      <div className="wrapper">
        <div className="user_parent_wrapper">
          <Navbar />
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )

}

export default UserStructure