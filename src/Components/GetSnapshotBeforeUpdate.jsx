import React, { Component } from 'react'

export class GetSnapshotBeforeUpdate extends Component {

  constructor(){
    super();
    this.state = {
      count: 0
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    // console.log("Component Did Update Method", snapshot, this.props.data);
    console.log("Component Did Update Method", snapshot);
    
  }

  getSnapshotBeforeUpdate(preProps, preState){
  //  console.log("Get Snapshot Before Update Method");
  //  return "Hello " + preProps.data
   console.log("Get Snapshot Before Update Method" , preState);
   return preState.count * 10
  }

  render() {
    return (
      <>
        <h4>Get Snapshot Before Update Class Component like Child Component</h4>
        {/* <h5>Update Name is {this.props.data}</h5> */}
        <h5>Count Is {this.state.count}</h5>
        <button onClick={() => this.setState({count : this.state.count + 1})}>Add Count</button>
      </>
    )
  }
}

export default GetSnapshotBeforeUpdate;