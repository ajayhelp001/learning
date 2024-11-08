import React, { useState } from "react"

const FormHeandaling = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [choose, setChoose] = useState("")
    const [agree, setAgree] = useState(false)

    const [update, setUpdate] = useState(false)

    function getFormValue(e) {
        console.log(
        `Name : ${name}
           Email : ${email}
           Password : ${password}
           Position : ${choose}
           Policy : ${agree}`
        );
        setUpdate(true)
        e.preventDefault();
    }
    return(
        <>
            <h2>Form Heandling</h2>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <form className="text-start" onSubmit={getFormValue}>
                            <div className="mb-3">
                                <label for="text" className="form-label">Your name</label>
                                <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} id="text" placeholder="Name"/>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Email"/>
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Your password</label>
                                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Password"/>
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Choose position</label>
                                <select className="form-select" onChange={(e) => setChoose(e.target.value)}>
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" onChange={(e) => setAgree(e.target.checked)} type="checkbox" value="" id="agree" />
                                <label className="form-check-label" for="agree">Checked checkbox</label>
                            </div>
                            <div className="mt-5">
                                <button className="btn btn-primary" onClick={() => setUpdate(true)}>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                {
                                    update ?
                                    <ul className="list-unstyled text-start">
                                        <li className="d-flex justify-content-between"><strong>Name:</strong><span className="text-end">{name}</span></li>
                                        <li className="d-flex justify-content-between"><strong>Email:</strong><span className="text-end">{email}</span></li>
                                        <li className="d-flex justify-content-between"><strong>Password:</strong><span className="text-end">{password}</span></li>
                                        <li className="d-flex justify-content-between"><strong>Positon:</strong><span className="text-end">{choose}</span></li>
                                        <li className="d-flex justify-content-between"><strong>Policy:</strong><span className="text-end">{agree ? "Accepted" : "Not Accepted"}</span></li>
                                    </ul>
                                    :   <ul className="list-unstyled text-start">
                                            <li className="d-flex justify-content-between"><strong>Name:</strong></li>
                                            <li className="d-flex justify-content-between"><strong>Email:</strong></li>
                                            <li className="d-flex justify-content-between"><strong>Password:</strong></li>
                                            <li className="d-flex justify-content-between"><strong>Positon:</strong></li>
                                            <li className="d-flex justify-content-between"><strong>Policy:</strong></li>
                                        </ul>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default  FormHeandaling;