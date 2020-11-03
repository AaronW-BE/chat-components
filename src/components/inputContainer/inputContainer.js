import React from 'react'

import './inputContainer.css'

function InputContainer(props) {
    return (
        <div className="input-container">
            {props.children}
        </div>
    );
}


export default InputContainer;