import React, {useState} from 'react'
import { Form } from 'react-bootstrap'

const FormPostApi = () => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [mobile , setMobile] = useState('')
    const [salary , setSalary] = useState('')
    const [designation , setDesignation] = useState('')

    const formsubmit = () =>{
        let formdata = {name, email, mobile, salary, designation }
        console.log(formdata);
        fetch("./../../API/Employer.json", {
            method : "POST",
            headers : {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(formdata)
        }).then((result) => {
            console.log(result);
        })
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
                    <input type="email" className='form-control' placeholder='Your Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col-6">
                    <input type="tel" className='form-control' placeholder='Your Mobile Number' onChange={(e) => setMobile(e.target.value)} />
                </div>
                <div className="col-6">
                    <input type="tel" className='form-control' placeholder='Your Salary' onChange={(e) => setSalary(e.target.value)} />
                </div>
                <div className="col-6">
                    <input type="text" className='form-control' placeholder='Your Designation' onChange={(e) => setDesignation(e.target.value)} />
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