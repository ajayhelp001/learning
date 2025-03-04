import React, {useState} from 'react'
import { Form } from 'react-bootstrap'

const FormPostApi = () => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [password_confirmation , setCpassword] = useState('')




    const formsubmit = () =>{
        let formdata = {name, email, username, password, password_confirmation }
        console.log(formdata);
        fetch("http://localhost:3000/api/register", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata),
        })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            alert("Registration successful"); 
        })
        .catch((error) => {
            console.error(error);
            alert("An error occurred during registration");
        });
    }  

  return (
    <>
        <h2>Form Post Api</h2>

        <Form> 
            <div className="row g-5 mb-5">
                <div className="col-6">
                    <input type="text" className='form-control' placeholder='Your Name' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="col-6">
                    <input type="text" className='form-control' placeholder='Your Username' onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="col-6">
                    <input type="email" className='form-control' placeholder='Your Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col-6">
                    <input type="password" className='form-control' placeholder='Your Password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="col-6">
                    <input type="password" className='form-control' placeholder='Your Confirm Password' onChange={(e) => setCpassword(e.target.value)} />
                </div>
                <div className="col-12">
                    <button type='button' onClick={formsubmit} className='btn btn-dark'>Submit</button>
                </div>
            </div>
        </Form>
    </>
  )
}

export default FormPostApi