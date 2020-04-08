import React, { Component } from 'react'
import Child from './Child';

class Parent extends Component {
    constructor(){
        super()
        this.state = {
            parentName :'Parent'
        }
        this.greetParent =  this.greetParent.bind(this);
    }

//! Function with no parms
    greetParent(){
        alert(`Hai ${this.state.parentName}`);
    }

//!function with parms, better to bind by arrow function    
    greetParent(childName){
        alert(`Hai ${this.state.parentName} from ${childName}` );
    }

    render() {        
        return (
            <div>
                <Child parenthandler = {this.greetParent}></Child>
            </div>
        )
    }
}

export default Parent;
//!Access the method of Parent from Child
//* Refer EventBind.js for types of Event Binding.