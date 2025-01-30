import React, {useState, useEffect} from 'react'
import { Table, Form } from 'react-bootstrap'

const PutAPIMethod = () => {
    const [datalist, setDataList] = useState([])
    const [formData, setFormData] = useState({userId: '', name: '', userName : '', userEmail: ''})

        const showData = () => {
            fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
                result.json().then((response) => {
                setDataList(response)
                    // console.log(response);
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

        const editData = (editId) => {
            let targetUser = datalist[editId - 1]
            setFormData({
                userId : targetUser.id,
                name : targetUser.name,
                userName : targetUser.username,
                userEmail : targetUser.email,
            })
        }


        const editRecordUpdate = () =>{
            let userId = formData.userId
            console.log(userId);
            
           fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
                method: 'PUT',
                headers:{
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                },

                body : JSON.stringify(formData)
                
           }).then((result) => {
                result.json().then((response) => {
                    console.log(response);
                    showData();
                    
                })
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
                                <td><button className='btn tbn-sm btn-light' onClick={() => editData(val.id)}>Edit Data</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

            <Form>
                <div className="row g-3">
                    <div className="col-6"><input type="text" className="form-control" value={formData.userId} /></div>
                    <div className="col-6"><input type="text" className="form-control" value={formData.name} onChange={(e) => setFormData({...formData, name : e.target.value})}/></div>
                    <div className="col-6"><input type="text" className="form-control" value={formData.userName} onChange={(e) => setFormData({...formData, userName : e.target.value})} /></div>
                    <div className="col-6"><input type="text" className="form-control" value={formData.userEmail} onChange={(e) => setFormData({...formData, userEmail : e.target.value})} /></div>
                    <div className="col-12"><button type='button' onClick={editRecordUpdate} className='btn btn-dark'>Submit Edit Data</button></div>
                </div>
            </Form>
    </>
  )
}

export default PutAPIMethod