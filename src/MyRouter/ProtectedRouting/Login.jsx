import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
       localStorage.setItem('login', true)
       navigate('/admin-panel')
    }
     useEffect(() => {
            let login = localStorage.getItem('login')
            if(login){
                navigate('/admin-panel')
            }
        })
  return (
    <>
        <h2>Login Page</h2>
        <button className='btn btn-dark' onClick={handleLogin}>Click Here</button>
    </>
  )
}

export default Login