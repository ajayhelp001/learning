// import { render } from '@testing-library/react';
import React, { Component } from 'react'

class Constructor extends Component{
    constructor(){
        super();
        console.log('hello i am a constructor');
        this.state = {
            name: 'Ajay',
            position: 'Web Designer'
        }
        
    }
    render(){
        console.log(' i am render');
        return(
            <>
                <h2>Constructore Component</h2>
                <h6 >My position is {this.state.position}</h6>
                <h5>My name is {this.state.name}</h5>
            </>
        )
    }
}

export default Constructor;