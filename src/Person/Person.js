import React from 'react';
import Radium from 'radium'
import styled from 'styled-components'
import './Person.css'
const person = (props) => {
    const StyledDiv = styled.div`
        width: 50%;
        padding: 12px 20px;
        margin: 10px auto;
        box-sizing: border-box;
        border: 1px solid black;
        text-align: center;
        @media (min-width:500px) : {
        width : '450px'
        }`;
    
    return (
        <StyledDiv>
        <p onClick={props.click}>{props.name} is {props.Age} years old. {props.children}</p>
        <input type="text" onChange={props.textChange} value={props.name}/>
        </StyledDiv>    
    );
}

export default Radium(person);