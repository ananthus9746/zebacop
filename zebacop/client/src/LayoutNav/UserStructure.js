import React from 'react'
import { Outlet} from 'react-router-dom'
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