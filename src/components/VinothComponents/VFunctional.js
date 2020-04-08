import React from 'react'


//!Without destructruing the props
// function VFunctional(props) {
//     return (
//         <div>
//             <h1>Name is {props.name} and age is {props.age}</h1>
//         </div>
//     )
// }


//!Destructuring the props in Parameter
function VFunctional ({name, age}){
    return (
        <div>
             <h1>Name is {name} and age is {age}</h1>
        </div>
    )
}


export default VFunctional
