import React, { useState } from 'react'

const ConditionalRendring = () => {
    const [age , setAge] = useState(20)
    function addage() {
        setAge(age + 5)
    }
    function removeage() {
        setAge(age - 5)
    }
    
  return (
    <>
        <h2> your age is {age}</h2>

        <h6 className='text-center bg-dark text-white '>
            {
                age <= 10 ? "Ohoo! your a kid" : age <= 20 ? "You are a young boy" : age <= 40 ? "You are a young" : "You are Old man" 
            }
        </h6>

        <button onClick={addage} className='btn btn-dark'>Add Age</button>
        <button onClick={removeage} className='btn btn-danger'>Remove Age</button>
    </>
  )
}

export default ConditionalRendring