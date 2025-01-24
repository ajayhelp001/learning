import React, { useState } from 'react'

const StateWithObject = () => {
    const [info, setInfo] = useState({name: "Ajay", age: 22})
  return (
    <>
        <h2>State With Object</h2>
        {/* <input type="text" className='form-control' value={info.name} onChange={(e) => setInfo({age: info.age ,  name: e.target.value})}/>
        <input type="text" className='form-control' value={info.age} onChange={(e) => setInfo({name: info.name ,age: e.target.value})}/> */}

        {/* age or name ko pahle hi bta dena ye jugadi kam h y bar bar karna padega multipal object ko change karna h to because ek ko change karte h to other sabhi object effet hote h  */}

        <input type="text" className='form-control' value={info.name} onChange={(e) => setInfo({...info ,  name: e.target.value})}/>
        <input type="text" className='form-control' value={info.age} onChange={(e) => setInfo({...info ,age: e.target.value})}/>

        {/* esliye ye sprid opreter use karte h to shi tarika ha */}

        <h3>Your Name is : {info.name}</h3>
        <h3>Your Age is : {info.age}</h3>
    </>
  )
}

export default StateWithObject