import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <>
        <h2>Admin</h2>
        <Link to='form'>Form Validation</Link>
        <Outlet/>
    </>
  )
}

export default Admin