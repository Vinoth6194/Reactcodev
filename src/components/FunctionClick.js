import React from 'react';

function FunctionClick() {
   
   function clickHandler(){
        console.log('Clicked')
    }
    return (
        <div>
            Function Comp button
            <button onClick = {clickHandler}>Click Me</button>
        </div>
    )
}

export default FunctionClick;
