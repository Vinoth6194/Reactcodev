import React, { Component } from 'react'


//!Without destruturing the props
// export class VClass extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Name {this.props.name}. Age is {this.props.age}</h1>
//             </div>
//         )
//     }
// }

//!Destructuring the props in Parameter
export class VClass extends Component {
    render() {
        const {name, age} = this.props

        return (
            <div>
                <h1>Name {this.props.name}. Age is {this.props.age}</h1>
            </div>
        )
    }
}


export default VClass;
