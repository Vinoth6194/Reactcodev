import React,  { Component } from 'react';


//* This is an example for various way for eventBinding.
class EventBind extends Component{

    constructor(){
        super();
        this.state = {
            'text':'Vinoth'
        }
        //!To make use of the normal function for event binding not arrow functions ... i,e for LINE 27 TYPE -3
        // this.eventHandler = this.eventHandler.bind(this);
    }
//!Type -3
    // eventHandler(){
    //     this.setState({
    //        'text':'Vinothkumar'
    //    })
    //    console.log(this);
    // }

    //!Arrow fun for bind Tyoe 4.
    eventHandler = ()=>{
        this.setState(
            {
                text:'Vinothkumar'
            }
        )
    }
    render(){
        return (
            <div>
        <h1>{this.state.text}</h1>
        {/* <button onClick = {this.eventHandler.bind(this)}>EventBind</button> */}
        {/* <button onClick = {() => this.eventHandler()}>Event</button> */}
        <button onClick = {this.eventHandler}>EventBind</button>

            </div>
        )
    }
}

//!Normal function to change the state -- LINE 24 TYPE -1
//!Arrow function to change the state -- LINE 25  Type -2, best one if parameters are there to be passed


//* 4 ways of Eventbinding 1.Bind in render func, 2. Arrow fun in render, 3. Bind in constructor with normal functional def, 4. Arrow function for function def

export default EventBind;