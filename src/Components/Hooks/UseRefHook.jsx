import React, { useRef, useState } from 'react'

const UseRefHook = () => {
    const [inputvalue, setInputvalue] = useState()
    let myRef = useRef()

    function modifyInput() {
       console.log(myRef.current.value);
       let inputValue = myRef.current.value
       setInputvalue(inputValue + inputValue)
    }
  return (
    <>
    <h2>UseRef Hook</h2>
    <input type="text" ref={myRef} />
    <button onClick={() => modifyInput()}>Click Here</button> 
    <br />
    <h3>Curunt Input Value is : {inputvalue}</h3>
    </>
  )
}

export default UseRefHook