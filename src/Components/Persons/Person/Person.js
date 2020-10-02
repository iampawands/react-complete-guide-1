import React, {Component} from 'react';
import classes from './Person.css'
import Auxx from '../../../hoc/Auxilary'
import withClass from "../../../hoc/withClass";
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
    }


    render() {
        console.log('Person rendered..')
        return (
            <Auxx>
                {this.context.isAuthenticated ? <p>Authenticated!!</p> :
                    <p>Not Authorized!!</p>
                }
                <p onClick={this.props.click}>{this.props.name} is {this.props.Age} years old. {this.props.children}</p>
                <input ref={this.inputElementRef} type="text" onChange={this.props.textChange} value={this.props.name}/>
            </Auxx>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}

export default withClass(Person, classes.Person);