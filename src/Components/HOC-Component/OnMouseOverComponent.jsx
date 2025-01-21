import React, { useState } from 'react'

const OnMouseOverComponent = () => {
    const [data, setData] = useState(0);
    const Incriment = () => {
        setData(data + 1)
    }
  return (
    <>
        <h2>On Mouse Over Component</h2>
        <h3>Mouse Hover Count Is : {data}</h3>
        <button onMouseOver={Incriment}>Add Data</button>
    </>
  )
}

export default OnMouseOverComponent