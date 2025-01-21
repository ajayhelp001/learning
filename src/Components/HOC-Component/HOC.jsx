import React, { useState } from 'react'

const HOC = (OldComponent) => {
    const NewComponent = () => {
        const [state, setState] = useState(0);
        const Incriment = () =>{
            setState(state + 1)
        }

        return <OldComponent value={state} updatecount={Incriment} />
    }
}

export default HOC