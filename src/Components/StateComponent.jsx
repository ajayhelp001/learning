import React, { useState } from "react";

const StateComponent = () => {
    const [count, setCount] = useState(0)
    const [countRemove, setCountRemove] = useState(0)
    function countFunction() {
        setCount(count+1)
    }
    function removeCountFunction() {
        setCountRemove(countRemove-1)
    }
    // -----------------------------------//
    const [counter, setCounter] = useState(0)

    function counterFunction(){
        setCounter(counter+1)
    }
    function counterNgosetionFunction(){
        setCounter(counter-1)
    }
    return(
        <>
            <h1>Update State Function</h1>
            <h2>{count}+{countRemove} = {count+countRemove}</h2>
            <button onClick={countFunction}>+ Value</button>
            <button onClick={removeCountFunction}>- Value</button>


            <h2>Same number in changes</h2>
            <h1>{counter}</h1>
            <button onClick={counterFunction}>Click +</button>
            <button onClick={counterNgosetionFunction}>Click -</button>
        </>
    )
}

export default StateComponent