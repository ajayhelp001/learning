import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import PostApi from './PostApi'

const GetApi = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://reqres.in/api/users?page=2").then((result) =>{
            result.json().then((response) => {
                setData(response.data)
                // console.log(response.data);
                
            })
        })
    }, [])

  return (
    <>
        <h2>Get Api</h2>
        <div className="table-responsive">
            <Table className='align-middle' responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>User ID</th>
                        <th>Avtar</th>
                        <th>User Name</th>
                        <th>User Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val, i) => 
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{val.id}</td>
                                <td><img src={val.avatar} className='rounded-circle object-fit-cover' width={'50px'}  height={'50px'} alt="" /></td>
                                <td>{val.first_name} {val.last_name}</td>
                                <td>{val.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>

        <PostApi/>
    </>
  )
}

export default GetApi