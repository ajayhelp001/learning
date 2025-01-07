import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('this is React useEffect');
    })
  return (
    <>
        <h3>This is useEffect Hook</h3>
        <h4>{count}</h4>
        {/* <button onClick={() => setCount(1)}>Update Count</button> */}
        <button onClick={() => setCount(count + 1)}>Update Count</button>
    </>
  )
}

export default UseEffectHook