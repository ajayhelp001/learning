import axios from 'axios'
import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

const AxiosPostRequest = () => {
    const [postData, setPostData] = useState({
        title: '',
        body: ''
    })
    const [showData, setShowData] = useState([])
    // https://jsonplaceholder.typicode.com/posts

    const handalOnchange = (e) => {
        setPostData({...postData, [e.target.name] : e.target.value})
    }

    const handalSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', postData).then((response) => {
            console.log(response);
            console.log(response.data);
            setShowData([...showData, response.data])
        })
    }
  return (
    <>
        <h2>Axios Post Request</h2>
        
        <form onSubmit={handalSubmit}>
            <div className="row">
                <div className="col-6"><input type="text" onChange={handalOnchange} placeholder='Title' name='title' className="form-control" /></div>
                <div className="col-6"><input type="text" onChange={handalOnchange} placeholder='Body' name='body' className="form-control" /></div>
                <div className="col-12 mt-4"><button onClick={handalSubmit}>Submit</button></div>
            </div>
        </form>

        <Table className='align-middle mt-5' responsive striped bordered hover variant="dark">
            <thead>
                {
                    showData.map((item, i) => {
                        return(
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <th>{item.title}</th>
                                <td>{item.body}</td>
                            </tr>
                        )
                    })
                }
            </thead>
        </Table>
    </>
  )
}

export default AxiosPostRequest