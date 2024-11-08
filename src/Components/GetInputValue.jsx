import React, { useState } from 'react'

function GetInputValue() {
    const [getvalue, setGetvalue] = useState(null)
    const [update, setupdate] = useState(false)
    function valuUpdate(val) {
        console.log(val.target.value);
        setGetvalue(val.target.value)
        setupdate(false)
    }
  return (
    <>
    
        <h1 className='text-2lg mb-3'>Hello Please Enter Your Name</h1>
        <input type="text" className='border px-3' onChange={valuUpdate} />
            {
                update ?  
                <h2 className='text-2lg mt-3'>Your Name Is : {getvalue}</h2>
                : null
              }
              <br/>

        <button onClick={() => setupdate(true)} className='btn btn-dark px-5 py-2 mt-4'>click Here And Get Value</button>
    </>
  )
}

export default GetInputValue