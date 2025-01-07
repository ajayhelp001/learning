import React, { memo } from 'react'

const UseCallBackExample = (props) => {
    console.log("I am child component", props);

  return (
    <>
        <h2>Total Items : {props.item}</h2>
    </>
  )
}

export default memo(UseCallBackExample)

// memo hook only component ko rerendring se rokta h jab parent component se props update nhi hote 