import React, { useState } from "react";
import './../css/component.css'

const ValueUpdateStateComponent = () => {
    const [name, setName] = useState("Your Name")
    const [input, setInput] = useState("")

    function handleInput(event) {
        setInput(event.target.value)
    }

    function updateFunction(event) {
        event.preventDefault();
        setName(input)
        setInput("")
    }
    
    return (
        <>
            <div className="box">
                <h1>Hello, <span>{name}!</span></h1>
                <form className="form">
                    <div className="field">
                        <label for="name-1">Update Name</label>
                        <div className="control">
                            <input type="text" name="name-1" className="input" onChange={handleInput} value={input} />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="button" onClick={updateFunction}>Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ValueUpdateStateComponent;