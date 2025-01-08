import React, { memo, useContext } from 'react'
import { MyData } from './ContextWithApiHooks'

const SecondComponent = () => {
    const  {valueData, getUserSalary} = useContext(MyData)
    const salary = 50000;
    return (
        <>
        <h3>Second Component {valueData}</h3>
        <button onClick={() => getUserSalary(salary)}>Salary Amount</button>
        </>
    )
}

export default memo(SecondComponent)