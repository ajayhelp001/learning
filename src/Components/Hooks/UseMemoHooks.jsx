import React, { useState, useMemo} from 'react'

const UseMemoHooks = () => {
    const [count , setCount] = useState(0);
    const [data , setData] = useState(2);


    // function multystep() {
    //     console.log("Componenet ReRendring");
    //     return count * 2
    // }
    
    const multypleRendring = useMemo(() =>  {
        console.log("Componenet ReRendring");
        return count * 2
    }, [count]);

    // UseMemo Hook component ko r8-rendring hone se rokta h
  return (
    <>
    <h2>This is Use Memo Hook Component</h2>
    {/* <h3>Count Update: {multystep()}</h3> */}
    <h3>Count Update: {multypleRendring}</h3>
    <h3>Count: {count}</h3>
    <button onClick={() => setCount(count + 1)}>Update Count</button>
    <h3>Data: {data}</h3>
    <button onClick={() => setData(data * 10)}>Update Data</button>
    </>
  )
}

export default UseMemoHooks