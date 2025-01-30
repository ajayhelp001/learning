import React, {useState, useEffect} from 'react'
import { Table, Form } from 'react-bootstrap'

const PreFilledFormData = () => {
    const [datalist, setDataList] = useState([])
    const [formData, setFormData] = useState({userId: '', name: '', userName : '', userEmail: ''})

        const showData = () => {
            fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
                result.json().then((response) => {
                setDataList(response)
                    console.log(response);
                    setFormData({
                        userId : response[0].id,
                        name : response[0].name,
                        userName : response[0].username,
                        userEmail : response[0].email,
                    })
                })
            })
        }
        
       useEffect(() => {
            showData();
        }, [])

        const updatedata = (editId) => {
            // console.log(datalist[editId - 1]);
            let targetUser = datalist[editId - 1]
            setFormData({
                userId : targetUser.id,
                name : targetUser.name,
                userName : targetUser.username,
                userEmail : targetUser.email,
            })
        }
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
                                <td><button className='btn tbn-sm btn-light' onClick={() => updatedata(val.id)}>Edit Data</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

            <Form>
                <div className="row g-3">
                    <div className="col-6"><input type="text" className="form-control" value={formData.userId} /></div>
                    <div className="col-6"><input type="text" className="form-control" value={formData.name} /></div>
                    <div className="col-6"><input type="text" className="form-control" value={formData.userName} /></div>
                    <div className="col-6"><input type="text" className="form-control" value={formData.userEmail} /></div>
                    <div className="col-12"><button type='button' className='btn btn-dark'>Submit Edit Data</button></div>
                </div>
            </Form>
    </>
  )
}

export default PreFilledFormData