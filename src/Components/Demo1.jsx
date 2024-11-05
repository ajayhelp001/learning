import React from 'react'

const Demo1 = () => {
//   return (
//    <div className='text-center'>
//         <h1>Demo1</h1>
//         <h2>Demo1</h2>
//         <h3>Demo1</h3>
//     </div>
//   )
// without jsx element ---> if ham jsx use nhi karte to hamara code kafi complicated ho jata h 
return React.createElement('h2', 'heading' , 'without jsx element');
}

export default Demo1