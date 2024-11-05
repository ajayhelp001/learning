import React, { Component } from "react";

class StateInClassComponent extends Component{
    constructor(){
        super();
        this.state = {
            name: 'Ajay',
            count: 0
        }
    }
    updateState(){
        this.setState({name: "ASSV"})
        this.setState({count: this.state.count+1})
    }
    render(){
        return(
            <>
                <h2>State In Class Component</h2>
                <h3>{this.state.name}</h3>
                <h3>{this.state.count}</h3>
                <button onClick={() => this.updateState()}>Click Me</button>
            </>
        )
    }
}
export default StateInClassComponent;