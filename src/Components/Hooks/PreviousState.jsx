import React, { useState } from 'react'

const PreviousState = () => {
    const [count, setCount] = useState(0)

    function updateCount() {
        let randumValue = Math.floor(Math.random()*10)
        setCount((prev) => {
            if (prev + randumValue > 6) {
                console.log(`Hello My Prev Value is ${prev} and Randam Value is ${randumValue}`);
            }else{
                return randumValue;
            }
            // console.log(prev);
            // return count + 1
        })
    }
  return (
    <>
        <h2>Previous State</h2>
        <div className="">Count : {count}</div>
        <button onClick={() => updateCount()}>Add Count</button>
    </>
  )
}

export default PreviousState