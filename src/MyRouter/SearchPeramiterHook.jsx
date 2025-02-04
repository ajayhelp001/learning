import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchPeramiterHook = () => {
    const [searchPeram, setSearchPeram] = useSearchParams();

    let myName = searchPeram.get('name')
    let myAge = searchPeram.get('age')
    // http://localhost:3000/search?name=ajay
    // http://localhost:3000/search?name=ajay&age=22
  return (
    <>
        <h2>Search Peramiter Hook</h2>
        <h3>My name is {myName} and my age is {myAge}</h3>
      <input type="text" className='form-conterol' onChange={(e) => setSearchPeram({name: e.target.value, age: 24})} />
        <button className='btn  btn-dark' onClick={() => setSearchPeram({name: 'Ajay', age : '22'})}>Set Details</button>
    </>
  )
}

export default SearchPeramiterHook