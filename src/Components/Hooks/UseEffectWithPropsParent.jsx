import React, { useEffect, useState } from 'react'
import UseEffectWithProps from './UseEffectWithProps'

const UseEffectWithPropsParent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('UseEffect COll', {count});
    
  })

  return (
    <>
      <h3>Use Effect With Props</h3>
      <UseEffectWithProps data={count}/> 
      <button onClick={() => setCount(count + 1)}>count</button>
    </>
  )
}

export default UseEffectWithPropsParent