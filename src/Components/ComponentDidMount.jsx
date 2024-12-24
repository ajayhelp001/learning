import React, { Component } from 'react'

class ComponentDidMount extends Component {
    constructor(){
        super();
        console.log('constructor');
        this.state = {
            statename : "Rajsthan"
        }
    };
    componentDidMount(){
        console.log('component did mount');
        
    }
  render() {
    console.log('render');
    
    return (
      <>
        <h3>This is DidAamount</h3>
        <h5>Your state name is {this.state.statename}</h5>
        <button onClick={() => {this.setState({statename: "Maharastra"})}} className='btn btn-primary'>click here</button>
      </>
    )
  }
}

export default ComponentDidMount

// componentDidMount sabhi state call hone ke bad last me call hota h 
// esme API call karwate h 
