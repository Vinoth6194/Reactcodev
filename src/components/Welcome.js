import React, { Component } from 'react';

//!Without Destructuring
// class Welcome extends Component{
//     render(){
//         // return <h1>Welcome Vinothkumar from Class Component</h1>
//     return  <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1> 
   
//     }

// }

//!With Destructuring
class Welcome extends Component{
    render () {
        const {name, heroName } =  this.props
    return <h1>Welcome {name} a.k.a {heroName}</h1>
    }
}

export default Welcome;