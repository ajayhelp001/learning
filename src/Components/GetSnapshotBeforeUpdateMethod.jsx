import React, { useState } from 'react'
import GetSnapshotBeforeUpdate from './GetSnapshotBeforeUpdate'

const GetSnapshotBeforeUpdateMethod = () => {
  // const [name, setName] = useState("Ajay")
  return (
    <>
        <h3>Get Snapshot Before Update Method</h3>
        {/* <GetSnapshotBeforeUpdate data={name}/>
        <button onClick={() => setName("Saini")}>Update Name</button> */}
        <GetSnapshotBeforeUpdate/>
        {/* <button>Update </button> */}
    </> 
  )
}

export default GetSnapshotBeforeUpdateMethod