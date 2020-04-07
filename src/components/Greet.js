import React from 'react';


//!Destructruing the props in param
//  const Greet = ({name,heroName}) =>{
//      return (
//          <div>
//              <h1>
//              {name} a.k.a {heroName}
//          </h1>
//          {/* {props.children} */}
//          </div>        
//      )
//  } 

 //!destructring the props in function body
    // const Greet = (props) => {
    //     const {name,heroName } = props;
    //     return (
    //         <div>
    //             <h1>{name} a.k.a {heroName}</h1> 

    //         </div>
    //     )
    // }

//!Without destructuting the props

const Greet = (props) =>  {
    return (
        <div>
            <h1>
                {props.name} a.k.a {props.heroName}
            </h1>
        </div>
    )
}


// function Greet(){
//     return <h1> Hai Vinothkumar</h1>
// }
export default Greet;