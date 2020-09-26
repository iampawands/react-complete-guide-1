import React from 'react';

const person = (props) => {
    return (
        <div>
        <p onClick={props.click}>{props.name} is {props.Age} years old. {props.children}</p>
        </div>    
    );
}

export default person;