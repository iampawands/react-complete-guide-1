import React from 'react';

const person = (props) => {
    return (
        <div>
        <p>{props.name} is {props.Age} years old. {props.children}</p>
        </div>    
    );
}

export default person;