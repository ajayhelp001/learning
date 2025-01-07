import React, { Component } from 'react'

export class ShouldComponentUpdate extends Component {

    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(){
        console.log("Total update count" ,this.state.count);
        // return true;
        if(this.state.count > 5 && this.state.count < 10){
            return true;
        }
    }

  render() {
    return (
      <>
        <h3>Component Should Update Method</h3>
        <h4>Total Count is {this.state.count}</h4>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Increase Count</button>
      </>
    )
  }
}

export default ShouldComponentUpdate