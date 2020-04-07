import React, { Component } from 'react'

class Counter extends Component {

    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    //For a fixed value of increment. In this case inc by 1.
    // increment(){
    //     this.setState({
    //         count : this.state.count + 1
    //     }, () => {console.log('Callback function valuse is ', this.state.count)})
    // }

    //

    increment(){
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
              <h1>Count - {this.state.count}</h1>  
              <button onClick = {() => this.incrementFive()}>Counter</button>
            </div>
        )
    }
}
export default Counter;