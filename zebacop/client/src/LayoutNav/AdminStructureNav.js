import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import  './AdminNav.css'

function AdminNav() {
    return (
        <>
            <nav className='admin_nav'>

                <p>Admin logo</p>
                <Link to="/admin">Home</Link>
                <Link to="/admin/pending">Pending</Link>
                <Link to="/admin/approved">Approved</Link>
                <Link to="/admin/progrssing">Pending</Link>
                <Link to="/admin/final">Final</Link>
                {/*finals we assign date started and ending date  */}
                  <Link to="/admin/ended">Ended</Link> 
                <Link to="/admin/rejected">Rejected</Link> 


                <button>Logout</button>

            </nav>
            <Outlet></Outlet>
        </>
    )
}

export default AdminNav