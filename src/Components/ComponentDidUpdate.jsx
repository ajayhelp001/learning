import React, { Component } from 'react'

class ComponentDidUpdate extends Component {
    constructor(){
        super();
        console.log('constructor');
        this.state = {
            counter: "0"
        }
    };
    componentDidUpdate(prevProps, prevCount, snapshot){
        console.log("Component Did Update" , prevCount.counter, this.state.counter);
        // if (prevCount.counter === this.state.counter) {
        //   alert("counter are same ")
        // }
        this.setState({counter: this.state.counter + 1}) //(enfinity jayega ye to condition based hi use karte h didupdate me)
        if(this.state.counter < 5){
          this.setState({counter: this.state.counter + 1})
        }
    }
  render() {
    console.log('Render');
    
    return (
      <>
      <h3>Component Did Update Life Cycle Method</h3>
        <h5>Count {this.state.counter}</h5>
        {/* <button className='btn btn-dark px-5' onClick = {() => {this.setState({counter: this.state.counter + 1})}}>Click Here</button> */}
        <button className='btn btn-dark px-5' onClick = {() => {this.setState({counter: 1})}}>Click Here</button>
      </>
    )
  }
}

export default ComponentDidUpdate

//  ComponentDidUpdate componenet ke state update hone ke bad render pahle call hota h and componeneDidUpdate uske bad call hota h matlab last me 