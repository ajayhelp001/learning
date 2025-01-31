import React, {useState, useEffect} from 'react'
import { Table, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DynemicRouter = () => {

  

    const [datalist, setDataList] = useState([])
        
       useEffect(() => {
           fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
               result.json().then((response) => {
               setDataList(response)
               })
           })
        }, [])

  return (
    <>
        <h2>Pre Filled Form Data</h2>
           <Table className='align-middle' responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datalist.map((val, i) => 
                            <tr key={i}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.username}</td>
                                <td>{val.email}</td>
                                <td><Link to={`/dynemic-route/${val.name}`} className='btn tbn-sm btn-light'>View </Link></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
    </>
  )
}

export default DynemicRouter