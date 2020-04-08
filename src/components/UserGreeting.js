import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(){
        super()
        this.state = {
            isLoggedIn : true
        }
    }
    render() 
    {
        //!if-else
        // if(this.state.isLoggedIn){
        //     return (<div><h1>Welcome Vinoth</h1></div>)
        // } else {
        //     return (<div><h1>Welcome Guest</h1></div>)
        // }
        // !Element Variable
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Vinoth</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return <h1>{message}</h1>

        
        //!Ternary operator
        // return (this.state.isLoggedIn? (<div><h1>Welcome Vinoth</h1></div>): <div><h1>Welcome Guest</h1></div>)
        
       //!Short circuit operator &&
        //! displays one on condition or nothing.
        return this.state.isLoggedIn && <div><h1>Welcome Vinoth</h1></div> 
        
}




}

export default UserGreeting;
