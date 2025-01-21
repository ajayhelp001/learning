import React, { useRef } from 'react'

const UnControlComponent = () => {

  const myRef = useRef();

  function myForm(e) {
    e.preventDefault()
    // alert("my input value is :" + myRef.current.value)

    let val = document.getElementById("myinput").value
    console.log("first input value is : " + myRef.current.value);
    console.log("second input value is : " + val);
    
  }
  return (
    <>
        <h2>Un Control Component</h2>
        <form onSubmit={myForm}>
          <input type="text" ref={myRef} className='form-control' />
          <input type="text" id='myinput' className='form-control' />
          <button className='btn btn-primary mt-5 px-5'>Submit</button>
        </form>
    </>
  )
}

export default UnControlComponent

//Un Control component me ham dom ko state se target nhi karte ha, dome ko perticuler direct target karte h
