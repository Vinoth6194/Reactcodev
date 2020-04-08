import React from 'react'

function Child(props) {
    return (
        <div>
            {/* <button onClick = {props.parenthandler}>Greet Parent</button> */}
            <button onClick = { () => props.parenthandler('Vinothkumar')}>Greet Parent</button>
        </div>
    )
}

export default Child;


//!Access the method of Parent from Child
//!Event bind with normal function and no parms : LINE 6
