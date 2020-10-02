import React ,{Component}from 'react'
import Person from './Person/Person';

class Persons extends Component{
    // static getDerivedStateFromProps(state,props){
    //     console.log(' Persons [getDerivedStateFromProps]',props);
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Persons [shouldComponentUpdate]')
        return !this.props.persons !== nextProps.persons
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons [getSnapshotBeforeUpdate]')
        return {message:'this is from getSnapshotBeforeUpdate'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Persons [componentDidUpdate]',snapshot)
    }

    componentWillUnmount() {
        console.log('Persons componentWillUnmount')
    }

    render(){
        return <div>
        {this.props.personList.map((person,index) => {
              return  <Person 
              name={person.name} 
              Age={person.age}
              click={() => this.props.clicked(index)}
              textChange={ (event) => this.props.changed(event,person.id)}
              key={person.id}/>;
            })}
    </div>
    }
}
export default Persons;