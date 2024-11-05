import React from "react";

const EventFunction = () => {
    let firstName = "My Name Ajay"
    function helloAleart() {
        firstName = "Ohhh! Sorry My Name Vijay"
        alert(firstName)
    }
    function helloAleart1(e) {
        alert(e)
    }
    return(
        <>
            <h1>{firstName}</h1>
            <button onClick={helloAleart}>Click Me </button>
            <button onClick={() => helloAleart1(50)}>Click Me </button>
        </>
    )
}
export default EventFunction;