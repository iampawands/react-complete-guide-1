import React from 'react'
import Person from './Person/Person';
const persons = (props) => {
    return <div>
        {props.personList.map((person,index) => {
              return  <Person 
              name={person.name} 
              Age={person.age}
              click={() => props.clicked(index)}
              textChange={ (event) => props.changed(event,person.id)}
              key={person.id}/>;
            })}
    </div>
}

export default persons;