import React from 'react'

function AdminNav() {
    return (
        <>
            <nav className='admin_nav'>

                <p>Admin logo</p>
                <Link to="/">Home</Link>
                <Link to="/pending">Pending</Link>
                <Link to="/approved">Approved</Link>
                <Link to="/progrssing">Pending</Link>
                <Link to="/final">Final</Link>{/*finals we assign date started and ending date  */}
                <Link to="/ended">Ended</Link>
                <Link to="/rejected">Rejected</Link>


                <button>Logout</button>

            </nav>
        </>
    )
}

export default AdminNav