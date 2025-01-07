import React, { useEffect, useState } from 'react'

const UseEffectWithCondition = ({ageprops, countprops}) => {
// const [age, setAge] = useState(20);
// const [count, setCount] = useState(0);

// Defoult Behavior 
    // useEffect(() => {
    //     console.log("Your Age is", age , count);
    // })

    // Single only count update 
    // useEffect(() => {
    //     console.log("Your Age is", age , count);
    // }, [count])

    // diffrent diffrent update 
    // useEffect(() => {
    //     console.log("Your Count is" , count);
    // }, [count])
    // useEffect(() => {
    //     console.log("Your Age is", age);
    // }, [age])


    useEffect(() => {
        console.log("Your Count is" , countprops);
    }, [countprops])
    useEffect(() => {
        console.log("Your Age is", ageprops);
    }, [ageprops])

  return (
    <>
        <h2>Use Effect With Condition Based</h2>
        <h3>Age : {ageprops}</h3>
        <h3>Counter : {countprops}</h3>

        {/* <button onClick={() => setAge(age + 1)}>Updage Age</button>
        <button onClick={() => setCount(count + 1)}>Updage Count</button> */}
    </>
  )
}

export default UseEffectWithCondition