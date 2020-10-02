import React, {Component} from 'react';
import classes from './Person.css'
import Auxx from '../../../hoc/Auxilary'
import withClass from "../../../hoc/withClass";
import PropTypes from 'prop-types'
class Person extends Component{
    render(){
         console.log('Person rendered..')
    return (
            <Auxx>
                <p  onClick={this.props.click}>{this.props.name} is {this.props.Age} years old. {this.props.children}</p>
                <input  type="text" onChange={this.props.textChange} value={this.props.name}/>
            </Auxx>
        );
    }
}

Person.propTypes = {
    click:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number
}

export default withClass(Person,classes.Person);