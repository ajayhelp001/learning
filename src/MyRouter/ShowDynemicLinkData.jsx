import React from 'react'
import { useParams, Link } from 'react-router-dom'

const ShowDynemicLinkData = () => {
    const {name} = useParams();
  return (
    <>
        <p className='mt-5'>
           <strong>{name}</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong>{name}</strong> Voluptatem nostrum dignissimos nemo animi eum natus tempora assumenda corrupti mollitia molestias?
        </p>
        <Link className='btn btn-sm btn-dark px-5' to="/dynemic-route">Go To Table</Link>
    </>
  )
}

export default ShowDynemicLinkData