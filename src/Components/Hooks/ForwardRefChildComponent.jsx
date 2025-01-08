import React, { forwardRef } from 'react'

const ForwardRefChildComponent = (props, refvalue) => {
  return (
    <>
      <input type="text" ref={refvalue}/>
    </>
  )
}

export default forwardRef(ForwardRefChildComponent);