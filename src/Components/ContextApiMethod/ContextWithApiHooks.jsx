import React, { createContext, useState } from 'react'
import FirstComponent from './FirstComponent'
// Create , Provide , Use

export const MyData = createContext()
const ContextWithApiHooks = () => {

  const [data, setData] = useState(1);
  const [salary, setSalary] = useState(1);

  const getSalary = (val) => {
    console.log("MY Salary is : " , val);
    setSalary(val);
  }

  return (
    <MyData.Provider value={{valueData : data, getUserSalary : getSalary}}>
      <>
          <h2>Context API</h2>
          <h3>Total Counts : {data}</h3>
          <h4>Total Salary Amount : {salary}</h4>
          <button onClick={() => setData(data + 1)}>Update Count</button>
          <FirstComponent />
      </>
    </MyData.Provider>
  )
}
export default ContextWithApiHooks