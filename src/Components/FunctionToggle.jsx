import React, { Component } from 'react'

export class FunctionToggle extends Component {
    componentWillUnmount(){
        alert("Component Remove ")
    }
  render() {
    return (
      <>
        <h3>Me Toggle Componenet Hoooo</h3>
      </>
    )
  }
}

export default FunctionToggle