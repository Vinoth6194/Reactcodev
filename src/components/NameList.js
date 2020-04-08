

import React from 'react';
import Persons from './Persons';

function NameList(){
    // const names = ['Vinoth', 'React', 'Developer'];
    // const nameList = names.map(name => <h2> {name}</h2>)
    const persons = [
        {
            id:1,
            name:'Vinoth',
            age:25,
            skill:'React js'
        },
        {
            id:2,
            name:'Vijay',
            age:40,
            skill:'React js and Angularjs'
        },

    ]
   // const personList = persons.map(person => (<h2> Name is {person.name}. I'm {person.age}. I am skilled in {person.skill} </h2>))
   
   //!Passing another component as a prop for listing
   const personList = persons.map(person => <Persons person = {person}/>)

    return (
            // <div>{nameList}</div>
            <div>{personList}</div>
        )            
}
export default NameList;