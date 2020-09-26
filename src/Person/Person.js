import React from 'react';
import './Person.css'
const person = (props) => {
    return (
        <div className='Person'>
        <p onClick={props.click}>{props.name} is {props.Age} years old. {props.children}</p>
        <input type="text" onChange={props.textChange} value={props.name}/>
        </div>    
    );
}

export default person;