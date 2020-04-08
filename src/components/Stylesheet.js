import React from 'react';
import './myStyles.css';

//!Applying sttyles conditionally using props
function Stylesheet(props) {
    let classname = props.primary ? 'primary':'';
    return (
        <div>
            <h1 className = {`${classname} font-xl`}>From Stylesheet in React</h1>  
        </div>
    )
}

export default Stylesheet;

//!External css
//!Multiple classes using ``