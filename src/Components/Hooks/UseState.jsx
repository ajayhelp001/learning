import React, { useState } from 'react'

const UseState = () => {
    const [ change , setChange] = useState(true)
  return (
    <>
        <h3> Hello My Name is Ajay {change} 

            {
                change ? "Right Name" : "Wrong Name"
            }
        </h3>
        <button onClick={() => setChange(!change)}>Update Name</button>
    </>
  )
}

export default UseState