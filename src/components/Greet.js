import React from 'react';

 const Greet = (props) =>{
     return (
         <div>
             <h1>
             {props.name} a.k.a {props.heroName}
         </h1>
         {props.children}
         </div>        
     )
 } 


// function Greet(){
//     return <h1> Hai Vinothkumar</h1>
// }
export default Greet;