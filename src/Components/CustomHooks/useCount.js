import { useState } from "react"

const useCount = () => {
    const [count, setCount] = useState(0)

    const incriment = () =>{
        setCount(count + 1)
    }
    const decriment = () =>{
        setCount(count - 1)
    }

    return [count, incriment, decriment]
}

export default useCount;