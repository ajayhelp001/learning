import React, { useRef } from 'react'
// import { useRef } from 'react'
import ForwardRefChildComponent from './ForwardRefChildComponent';

const ForwardRefHook = () => {
  // const [inpitvalue, setInputValue] = useState();
  let MyRef = useRef();

  function updateInputValue() {
    // console.log(MyRef.current.value);
    MyRef.current.value = "Ajay"
    MyRef.current.style.backgroundColor = "red";
    MyRef.current.style.color = "white";
  }

  return (
    <>
      <h2>Forward Ref Hook</h2>
      <ForwardRefChildComponent ref={MyRef}/>
      <button onClick={() => updateInputValue()}>Update Value</button>
    </>
  )
}

export default ForwardRefHook