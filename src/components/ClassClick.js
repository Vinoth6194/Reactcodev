import React, { Component } from 'react'

export class ClassClick extends Component {
    clicker(){
        console.log('Clicker as well');
    }
    render() {
      
        return (
            <div>
                Class Component
            
                {/* <button onClick = { () => this.clicker()}>Click Me</button> */}
                <button onClick = {this.clicker}>Click Me</button>

            </div>
        )
    }
}
//! Arrow function event handler with function call  LINE: 13
//! Normal function event handler without function call Line:14

export default ClassClick;
