import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [state, setState] = useState(1);

    // Effect for watching changes to document title
    // useEffect(() => {
    //   console.log('The title changed! State:', state, 'Title:', document.title);
    // }, [document.title]);
  
    // Function to increment the document title
    const incrementTitle = () => {
      const currentCount = parseInt(document.title, 10) || 1;
      document.title = currentCount + 1;
    };
  
    return (
      <>
        <p>
          State: {state} | Title: {document.title}
        </p>
        <button onClick={incrementTitle}>Increment title count</button>
        <br />
        <button onClick={() => setState(state + 1)}>Increment state count</button>
      </>
    );
}

export default UseEffectExample