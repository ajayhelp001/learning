import React, { useState } from 'react'

const ControlComponent = () => {
  const [item, setItem] = useState("Hello")
  return (
    <div className='container'>
        <h2>Control Component</h2>
        <input type="text" className='form-control' value={item} onChange={(e) =>  setItem(e.target.value)} />
        <h3>Value Is : {item}</h3>
    </div>
  )
}

export default ControlComponent

// control & uncontrolled components in input field necessary h
// Control component me ham dom ko state se direct target nhi karte h