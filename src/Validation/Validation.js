import React from 'react';
const validation = (props) => {
    let style={
        textTransform:'uppercase'
    }
    return (
        <div style={style}>
        {
            props.textLen>=5?
            <p>Text Long Enough!!</p>:<p>Text too Short!!</p>
        }
        
        </div>    
    );
}

export default validation;