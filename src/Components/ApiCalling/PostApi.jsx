import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const PostApi = () => {
    const [name , setName] = useState('')
    const [year , setYear] = useState('')
    const [color , setColor] = useState('')
    // https://reqres.in/api/register

    let formdata = {name, year, color}

    const formsubmit = () =>{
        console.log(formdata);
        fetch("https://reqres.in/api/register", {
            method : "Post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata)
        }).then((result) => {
            console.log(`Result = ${result}`);
            
        })
    }
  return (  
    <>
        <h2>Post Api</h2>
        <Form>
            <div className="row g-5 mb-5">
                <div className="col-6">
                    <input type="text" className='form-control' placeholder='Your Name' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="col-6">
                    <input type="text" className='form-control' placeholder='Your Name' onChange={(e) => setYear(e.target.value)} />
                </div>
                <div className="col-12">
                    <input type="color" className='form-control' placeholder='Your Name' onChange={(e) => setColor(e.target.value)} />
                </div>
                <div className="col-12">
                    <button type='button' onClick={formsubmit} className='btn btn-dark'>Submit</button>
                </div>
            </div>
        </Form>
    </>
  )
}

export default PostApi