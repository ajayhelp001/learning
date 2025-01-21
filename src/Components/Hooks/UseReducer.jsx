import React, { useReducer } from 'react'

const initionlValue = 0;
const reduserFun = (state, action) => {
    switch (action) {
        case "Incriment":
            return state + 1;

        case "Decriment":
            return state - 1;

        default:
            return state;
    }
}
 
const UseReducer = () => {

    const [count, eventFunction] = useReducer(reduserFun, initionlValue)

  return (
    <>
        <h2>Use Reducer</h2>
        <h3>Counter is : {count}</h3>

        <button onClick={() => eventFunction("Incriment")}>Incriment</button>
        <button onClick={() => eventFunction("Decriment")}>Decriment</button>
    </>
  )
}

export default UseReducer