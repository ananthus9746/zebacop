import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function UserStructureNav() {
  return (
  <>
    <nav className='user_nav'>

        <p>Logo</p>

        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/community">Community</Link>

        <button>Wallet Connect</button>


        <Outlet></Outlet>
    </nav>
  </>
  )
}

export default UserStructureNav