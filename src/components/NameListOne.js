import React from 'react'

function NameListOne() {
    const names  = ['Vinothkumar', 'Santhi','Kiruthika','Selvan'];
const nameList = names.map((name,index) => <h2 key = {index} >{index} {name}</h2>);
    return (
        <div>
            <div>{nameList}</div>
        </div>
    )
}
export default NameListOne;