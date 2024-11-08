import React, { useState } from 'react'

const FormValidation = () => {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [nameErr , setNameErr] = useState("")
    const [emailErr , setEmailErr] = useState("")
    const [passwordErr , setPasswordErr] = useState("")
    const [nameSuccess , setNameSuccess] = useState("")
    const [emailSuccess , setEmailSuccess] = useState("")
    const [passwordSuccess , setPasswordSuccess] = useState("")

    function formValition(e){
        e.preventDefault();
        setNameErr("")
        setEmailErr("")
        setPasswordErr("")
        setNameSuccess("")
        setEmailSuccess("")
        setPasswordSuccess("")

        let  valid = true;
        // Username validation
        if (name.length <= 5) {
            setNameErr("Name must be at least 4 characters long.");
            valid = false;
        } else{
            setNameSuccess("Valid username ")
        }
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            setEmailErr("Please enter a valid email address.");
            valid = false;
        }else{
            setEmailSuccess("Valid email address ")
        }
        if (password.length <= 5) {
            setPasswordErr("Password must be at least 6 characters long.");
            valid = false;
        }else{
            setPasswordSuccess("Valid password ")
        }


        if (valid) {
            alert("submit")
            console.log(name, email, password);
            
        }


    }
    const handleUserName = (e) =>{
        setName(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }


  return (
    <>
        <div className="container">
            <div className="row text-center mt-5">
                <div className="col-12"><h2>Form Validation</h2></div>
                <div className="col-6 mx-auto mt-5">
                    <form className="text-start" onSubmit={formValition}>
                        <div className="mb-3">
                            <label for="text" className="form-label">Your name</label>
                            <input type="text" className="form-control" onChange={handleUserName} placeholder="Name"/>
                            {nameErr && <span className='text-danger'>{nameErr}</span> }
                            {nameSuccess && <span className='text-success'>{nameSuccess}</span> }
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" onChange={handleEmail}  placeholder="Email"/>
                            {emailErr && <span className='text-danger'>{emailErr}</span> }
                            {emailSuccess && <span className='text-success'>{emailSuccess}</span> }
                        </div>
                        <div className="mb-3">
                            <label for="pass" className="form-label">Password</label>
                            <input type="password" className="form-control" onChange={handlePassword}  placeholder="Password"/>
                            {passwordErr && <span className='text-danger'>{passwordErr}</span> }
                            {passwordSuccess && <span className='text-success'>{passwordSuccess}</span> }
                        </div>
                        <div className="mt-5">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default FormValidation;