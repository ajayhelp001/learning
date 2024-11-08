import React, { useState } from 'react'

const HideShowToggle = ({data}) => {
    const [result, setResult] = useState(true)
  return (
    <>
        <h2>Hide and Show in React Js</h2>
        {
            result ? <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, tempora?</h3> : ""
        }
        
        <button onClick={() => setResult(true)}>Show</button>
        <button onClick={() => setResult(false)}>Hide</button>
        <button onClick={() => setResult(!result)}>{ result ? "Hide" : "Show"}</button>
        <button onClick={data}>Alert</button>
    </>
  )
}

export default HideShowToggle;