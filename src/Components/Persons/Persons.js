import React ,{Component}from 'react'
import Person from './Person/Person';

class Persons extends Component{
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