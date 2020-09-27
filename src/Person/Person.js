import React from 'react';
import Radium from 'radium'
import './Person.css'
const person = (props) => {
    const style={
        '@media (min-width:500px)' : {
            width : '450px'
        }
    }
    return (
        <div className='Person' style={style}>
        <p onClick={props.click}>{props.name} is {props.Age} years old. {props.children}</p>
        <input type="text" onChange={props.textChange} value={props.name}/>
        </div>    
    );
}

export default Radium(person);