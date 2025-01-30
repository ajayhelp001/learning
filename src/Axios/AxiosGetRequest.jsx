import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const AxiosGetRequest = () => {
    const [myData, setMyData] = useState([])

    useEffect(() => {
        let apiUrl = 'https://jsonplaceholder.typicode.com/users'

        axios.get(apiUrl).then((response) => {
            console.log(response);
            setMyData(response.data)
        })
    },[])
  return (
    <>
        <h2>Axios Get Request</h2>
        <Table className='align-middle' responsive striped bordered hover variant="dark">
            <tbody>
                {
                    myData.map((item, i) => {
                    return(
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                        </tr>
                    )
                    })
                }
            </tbody>
        </Table>
    </>
  )
}

export default AxiosGetRequest