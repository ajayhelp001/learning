import React, { useState } from 'react'

const FindReplaceStateComponent = () => {
    const [find, setFind] = useState('Lorem')
    const [findInput, setFindInput] = useState('')
    const [replaceInput, setReplaceInput] = useState('')

    function handelChangeFind(event){
        setFindInput(event.target.value)
    }
    function handelChangeReplace(event){
        setReplaceInput(event.target.value)
    }
    function replaceFunction(event){
        event.preventDefault();
        if (findInput && replaceInput) {
            setFind(replaceInput); 
        }
    }
  return (
    <>
        <h1>Find Replace State Component</h1>
        <form>
            <div className="first">
                <label htmlFor="firstname">Find</label>
                <input type="text" value={findInput} onChange={handelChangeFind}/>
            </div>
            <div className="last">
                <label htmlFor="firstname">Replace</label>
                <input type="text" value={replaceInput} onChange={handelChangeReplace} />
            </div>
            <button onClick={replaceFunction}>Submit</button>
            <p>{find} ipsum dolor sit amet consectetur adipisicing {find} elit. Amet fuga repellat {find} corporis sapiente dolor, sed in pariatur {find}  doloribus eveniet ullam!</p>
        </form>
    </>
  )
}

export default FindReplaceStateComponent;