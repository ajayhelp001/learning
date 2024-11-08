import React, { Component } from 'react'
class Render extends Component {
    // constructor(){
    //     super();
    //     console.log('hello i am a constructor');
    //     this.state = {
    //         name: 'Ajay',
    //         position: 'Web Designer'
    //     }
        
    // }
  render() {
    // console.log( "Render Method", this.state);
    console.log( "Render Method", this.props);
    
    return (
      <>
        <h2>Render Method + Component</h2>
        {/* <h6>my name is {this.state.name}</h6>
         <button onClick={() => this.setState({name : "Vijay"})}>Update</button> */}
         <h6>Props in Name is {this.props.data}</h6>
      </>
    )
  }
}

export default Render ;