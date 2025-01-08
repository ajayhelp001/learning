import React, { memo, useContext } from 'react'
import { MyData } from './ContextWithApiHooks'
import SecondComponent from './SecondComponent'

const FirstComponent = () => {
    const {valueData} = useContext(MyData)
    console.log("value is ",{valueData});
    
  return (
    <>
        <h3>First Component in count {valueData}</h3>
        <SecondComponent/>
    </>
  )
}

export default memo(FirstComponent)