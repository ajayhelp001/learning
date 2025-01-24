import React, { useState } from 'react'
import PreviousProps from './PreviousProps'

const PreviousPropsParent = () => {
    const [data , setData] = useState(0)
    function updateFunction() {
        let randomValue = Math.floor(Math.random()*10)
        setData(() => {
            return randomValue
        })
    }
  return (
    <>
        <h2>Previous Props Parent</h2>
        <PreviousProps item={data}/>
        <button onClick={() => updateFunction()}>Update Count</button>
    </>
  )
}

export default PreviousPropsParent