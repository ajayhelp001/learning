import React, {useState} from 'react'
import { Form } from 'react-bootstrap'

const FormPostApi2 = () => {
    const [username , setUsername] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const [error , setError] = useState('')
    const [message , setMessage] = useState('')




    const formsubmit = () =>{
        let formdata = {email, username, password}
        // if (!email || !username || !password) {
        //     setError("all field requird")
        // }
        console.log(formdata);
        fetch("http://localhost/wp-demo/wp-json/learning-api/v1/register-user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata),
        }).then((result) => {
            console.log(result);
            // setMessage('Registration successful!')

            if (result.ok) {
                setMessage("Registration successful!");
                setError("");
              } else {
                setError(result.error || "Registration failed.");
                setMessage("");
              }
        })
    }  

  return (
    <>
        <h2>Form Post Api</h2>

        <Form> 
            <div className="row g-5 mb-5">
                <div className="col-6">
                    <input type="text" className='form-control' placeholder='Your Username' onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="col-6">
                    <input type="email" className='form-control' placeholder='Your Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col-6">
                    <input type="password" className='form-control' placeholder='Your Password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="col-12">
                    <button type='button' onClick={formsubmit} className='btn btn-dark'>Submit</button>
                </div>
                <div className="col-12 text-center">
                    <p className='text-danger'>{error}</p>
                    <p className='text-success'>{message}</p>
                </div>
            </div>
        </Form>
    </>
  )
}

export default FormPostApi2