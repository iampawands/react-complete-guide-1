import React from 'react';

const person = (props) => {
    return (
        <div>
        <p>{props.name} is {props.Age} years old.</p>
        <p>{props.children}</p>
        </div>    
    );
}

export default person;