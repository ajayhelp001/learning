import React, {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap'

const DeletePostApi = () => {

    const [data, setData] = useState([])

    const showData = () => {
        fetch("https://reqres.in/api/users?page=2").then((result) =>{
            result.json().then((response) => {
                setData(response.data)
                // console.log(response.data);
                
            })
        })
    }
    
    useEffect(() => {
        showData()
    }, [])

    const deleteData = (userId) =>{
        console.log(userId);
        fetch(`https://reqres.in/api/users?page=2/${userId}`,{
            method: "DELETE",
        }).then((result) => {
            result.JSON().then((response) => {
                // showData()
                console.log(response);
                
            })
        })
    }

  return (
    <>
        <h2>Delete Post Api</h2>

        <Table className='align-middle' responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>User ID</th>
                        <th>Avtar</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Action</th>
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
                                <td><button onClick={() => deleteData(val.email)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
    </>
  )
}

export default DeletePostApi