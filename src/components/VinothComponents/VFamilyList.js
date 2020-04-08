import React from 'react'
import VFamiy from './VFamiy';

function VFamilyList() {

   // const members = ['Selvan', 'Santhi','Kiruthika', 'Vinothkumar'];
    //const memList = members.map(mem => <h2>{mem}</h2>);
    const members = [
        {
            name:'Vinothkumar S',
            age:25
        },
        {
            name:'Kiruthika S',
            age:21
        }
    ]
    const memList = members.map(mem => <VFamiy mems = {mem}></VFamiy>);
    return (
        <div>
            {memList}
        </div>
    )
}

export default VFamilyList;