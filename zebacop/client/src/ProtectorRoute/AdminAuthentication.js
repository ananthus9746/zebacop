
import React from 'react'
import { json, Navigate, Outlet } from 'react-router-dom'

const AdminAuthentication=()=>
{
// const admin=localStorage.getItem('Admintoken');
const admin=true
return admin?<Outlet/>:<Navigate to='/adminLogin'/>

}

export default AdminAuthentication


