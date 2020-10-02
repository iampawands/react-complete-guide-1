import React, {Component} from 'react';
import classes from './Person.css'

class Person extends Component{
    render(){
         console.log('Person rendered..')
    return [
        <p key='112' onClick={this.props.click}>{this.props.name} is {this.props.Age} years old. {this.props.children}</p>,
        <input key='1223' type="text" onChange={this.props.textChange} value={this.props.name}/>

    ];
    }
}


export default Person;