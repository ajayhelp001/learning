import React, { Component } from 'react'
import FunctionToggle from './FunctionToggle';

export class ComponentWillUpdate extends Component {
    constructor(){
        super();
        this.state = {
            show : true
        }
    }
  render() {
    return (
        <>
        <h2>This is component will update || Life cycle method</h2>
        
        {
            this.state.show ? <FunctionToggle/> : <h3>Componente Remove</h3>
        }
        <button onClick={() => {this.setState({show: !this.state.show})}}>Toggle Button</button>
        </>
    )
  }
}

export default ComponentWillUpdate