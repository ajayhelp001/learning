import React, { useState } from 'react'

const OnclickComponent = () => {
    const [count, setCount] = useState(0)
  return (
    <>
        <h2>On Click Component</h2>
        <h3>On Click Component Count Is : {count}</h3>
        <button onClick={() => setCount(count + 1)}>Add Data</button>
    </>
  )
}

export default OnclickComponent