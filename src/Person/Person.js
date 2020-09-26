import React from 'react';

const person = (props) => {
    return (
        <div>
        <p onClick={props.click}>{props.name} is {props.Age} years old. {props.children}</p>
        <input type="text" onChange={props.textChange} />
        </div>    
    );
}

export default person;