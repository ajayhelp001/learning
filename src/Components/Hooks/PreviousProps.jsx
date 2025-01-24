import React, { useEffect, useRef } from 'react'

const PreviousProps = ({item}) => {
    let previousValue = useRef();
    useEffect(() => {
        previousValue.current = item
    })
    const prev_value = previousValue.current
  return (
    <>
        <h2>Previous Props</h2>
        <h3>Counts : {item}</h3>
        <h3>Previous Value : {prev_value}</h3>
    </>
  )
}

export default PreviousProps