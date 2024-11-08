import React from 'react'
import PassPropsFunction from './PassPropsFunction'
import HideShowToggle from './HideShowToggle'

const PassPropsFunctionFroup = () => {
    function getAlert() {
        alert("Hello you are open App.js file right now ")
    }
  return (
    <>
        <PassPropsFunction data={getAlert}/>
        <HideShowToggle data={getAlert}/>
    </>
  )
}

export default PassPropsFunctionFroup