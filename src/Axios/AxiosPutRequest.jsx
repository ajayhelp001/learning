import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

const AxiosPutRequest = () => {
    const [update, setUpdate] = useState([])
    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const handalInput = (e) => {
        setPost({...post, [e.target.name] : e.target.value});
    }
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1', post).then((response) => {
            console.log(response.data);
            setPost(response.data)
        })
    }, [])

    const handalSubmit = (e) => {
        e.preventDefault();
        axios.put('https://jsonplaceholder.typicode.com/posts/1', post).then((response) => {
            console.log(response.data);
            setUpdate(response.data)
        })
    }
  return (
    <>
        <h2>Axios Put Request</h2>

        <form onSubmit={handalSubmit}>
            <div className="row">
                <div className="col-6"><input type="text" onChange={handalInput} placeholder='Title' name='title' className="form-control" /></div>
                <div className="col-6"><input type="text" onChange={handalInput} placeholder='Body' name='body' className="form-control" /></div>
                <div className="col-12 mt-4"><button onClick={handalSubmit}>Submit</button></div>
            </div>
        </form>


         <Table className='align-middle mt-5' responsive striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>{update.title}</th>
                    <td>{update.body}</td>
                </tr>
            </thead>
        </Table>
    </>
  )
}

export default AxiosPutRequest