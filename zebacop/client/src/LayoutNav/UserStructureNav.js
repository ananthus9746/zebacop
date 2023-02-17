import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import Home from '../pages/User/Home/Home'
import './UserNav.css'

function UserStructureNav() {
  return (
  <>
    <nav className='user_nav'>

        <p>Logo</p>

        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="">Community</Link>

        <Link to="/ConnectWallets">
        <button>Wallet Connect</button>

        </Link>




        <Outlet></Outlet>
    </nav>
  </>
  )
}

export default UserStructureNav