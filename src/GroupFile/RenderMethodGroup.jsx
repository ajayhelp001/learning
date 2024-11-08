import React, { useState } from 'react'
import Render from '../Components/Render'

const RenderMethodGroup = () => {
const [update, setUpdate] = useState("Ajay")

  return (
    <>
        <Render data={update}/>
        <button onClick={() => setUpdate("Ajay Kumar Saini")}>Update Full Name</button>
    </>
  )
}

export default RenderMethodGroup