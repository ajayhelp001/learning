import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const AxiosDeleteRequest = () => {

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            setPost(response.data)
            console.log(response.data);
            
        })
    }, [])

    const handelDelete = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/1`).then((response) => {
            alert('Deleted Post')
            console.log(response.data);
        }, [])
    }

  return (
    <>
        <h2>Axios Delete Request</h2>
        <Table className='align-middle mt-5' responsive striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>{post.userId}</th>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td><button onClick={handelDelete} className='btn btn-sm btn-danger'>Delete</button></td>
                </tr>
                {/* {
                    post.map((item, i) => {
                        return(
                            <tr key={i}>
                                <th>{item.userId}</th>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                                <td><button onClick={handelDelete} className='btn btn-sm btn-danger'>Delete</button></td>
                            </tr>
                        )
                    })
                } */}
            </thead>
        </Table>
    </>
  )
}

export default AxiosDeleteRequest