import React from 'react';
import './CharComponent.css'
const charComponent = (props) => {
    return (
        <p onClick={props.clicked} className='CharComponent'>{props.txt}</p>
    );
}

export default charComponent;