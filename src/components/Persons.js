import React from 'react'

//!Destructuring the props person in param
function Persons({person}){
    return(
    <div>
                <h2> Name is {person.name}. I'm {person.age}. I am skilled in {person.skill} </h2>

    </div>
)}


export default Persons;