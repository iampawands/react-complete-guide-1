import React from 'react';
import Radium from 'radium'
import classes from './Person.css'
const person = (props) => {
    
    return (
        <div className={classes.Person}>
        <p onClick={props.click}>{props.name} is {props.Age} years old. {props.children}</p>
        <input type="text" onChange={props.textChange} value={props.name}/>
        </div>    
    );
}

export default Radium(person);