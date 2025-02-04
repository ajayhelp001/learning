import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Company = () => {
  return (
    <>
        <h2>Nested Routing</h2>
        <Link className='me-3' to="student">Student</Link>
        <Link className='me-3' to="admin">Admin</Link>
        <Link className='me-3' to="faculty">Faculty</Link>
        <Outlet/>
    </>
    
  )
}

export default Company