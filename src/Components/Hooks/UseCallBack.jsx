import React, { useCallback, useState } from 'react'
import UseCallBackExample from './UseCallBackExample';

const UseCallBack = () => {
    const [count , setCount] = useState(0);
    const [item , setItem] = useState(2);

    // const multyRendar = function multy() {
    //     console.log("this is reRendring items", item);
    // }

    const multyRendar = useCallback(() => {
        console.log("this is reRendring items", item);
    }, [item])
  return (
    <>
        <h2>Use Call Back Hook Method</h2>
        <h3>Counts: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Update Count</button>
        {/* <h3>Items: {item}</h3> */}
        <UseCallBackExample item={item} data={multyRendar}/>
        <button onClick={() => setItem(item * 2)}>Update Items</button>
    </>
  )
}

export default UseCallBack