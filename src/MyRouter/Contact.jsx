import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()

    let changeLink = false 

    const handalChange = () => {
        if(changeLink){
            navigate('/')
        } else{
            navigate('/about')
        }
    }
  return (
    <>
        <h2>On Button Nevigation Change</h2>

        {/* <button onClick={() => navigate('/')} className='btn btn-dark mb-2'>Got To Home Page</button> <br />
        <button onClick={() => navigate('/about')} className='btn btn-primary'>Got To Home Page</button> */}

        <button onClick={() => handalChange()} className='btn btn-dark mb-2'>Got To Home Page</button> <br />
        <button onClick={() => handalChange()} className='btn btn-primary'>Got To Home Page</button>
    </>
  )
}

export default Contact