import React, { useEffect, useState } from 'react'
import UseEffectWithCondition from './UseEffectWithCondition';

const UseEffectWithConditionParent = () => {
const [age, setAge] = useState(20);
const [count, setCount] = useState(0);

    // diffrent diffrent update 


  return (
    <>
        <h2>Use Effect With Condition Based</h2>
        <UseEffectWithCondition ageprops={age}  countprops={count} />
        <button onClick={() => setAge(age + 1)}>Updage Age</button>
        <button onClick={() => setCount(count + 1)}>Updage Count</button>
    </>
  )
}

export default UseEffectWithConditionParent