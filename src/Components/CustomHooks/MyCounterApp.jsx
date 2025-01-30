import useCount from './useCount.js'

const MyCounterApp = () => {
    // const [count, setCount] = useState(0)

    // const incriment = () =>{
    //     setCount(count + 1)
    // }
    // const decriment = () =>{
    //     setCount(count - 1)
    // }
    const [count, incriment, decriment] = useCount(0)

  return (
    <>
        <h2>My Counter App</h2>
        <h3>Counts: {count}</h3>

        <button className='btn btn-dark me-4' onClick={incriment}>Incriment</button>
        <button className='btn btn-danger' onClick={decriment}>Decriment</button>
    </>
  )
}

export default MyCounterApp