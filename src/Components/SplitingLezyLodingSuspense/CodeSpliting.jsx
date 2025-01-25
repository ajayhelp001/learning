import React from 'react'

// import { adition } from "../add";
// console.log(adition(5,5));

import('../add').then((result) => {
    // console.log("Result = " + result.adition(5,5));
})
// import ek promis leta h ye tarika shi h esme code block nhi karta but direct import karke karne pr wo pahle coll hoga and component ka dome bad me 

const CodeSpliting = () => {
  return (
    <>
     <h2>Code Spliting</h2>
     
    </>
  )
}

export default CodeSpliting