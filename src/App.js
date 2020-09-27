import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components'
import Radium, { StyleRoot  } from 'radium'

const StyledButton = styled.button`
      background-color:${props => props.alt?'red':'green' };
      color:white;
      font:inherit;
      cursor:pointer;
      padding:8px;
      border:1px solid blue;
      &:hover{
      background-color:${props => props.alt?'salmon':'lightgreen' };
      color:black;
      }`;

class App extends Component {
  state = {
    persons : [
    {id:1,name:'Pawan',age:18},
    {id:2,name:'Amsn',age:18},
    {id:3,name:'Jaye',age:18}
    ],
    userName:'Pawan',
    showPersons : false
  }
  
  changeState = (newName) => {
    this.setState({
    persons : [{name:newName,age:44},
    {name:'Amsnaa',age:33},
    {name:'Jayeaa',age:22}
    ]
  });
  }
  
  changeTextHandler = (event, id) =>{
      let perInd = this.state.persons.findIndex(p=>{
        return p.id === id;
      });
      
      const person = {
        ...this.state.persons[perInd]
      };
      
      person.name = event.target.value;
      
      const personList = [...this.state.persons]
        
      personList[perInd] = person
         
      this.setState({
        persons:personList
      })
  }
  
  togglePersonHandler = () =>{
    this.setState({
      showPersons:!this.state.showPersons
    });
  }

  deletePersonHandler = (id) => {
    const temp = [...this.state.persons]
    temp.splice(id,1);
    this.setState({
      persons:temp
    }
      );
  }
  
  render() {
    let personsList = null;
    
    if(this.state.showPersons){
      personsList = (
            <div>
            {this.state.persons.map((person,index) => {
              return  <Person 
              name={person.name} 
              Age={person.age}
              click={this.deletePersonHandler.bind(this,index)}
              textChange={ (event) => this.changeTextHandler(event,person.id)}
              key={person.id}/>;
            } )}
            </div>
        );
        
    }
    
    let classes = [];
    
    if(this.state.persons.length<=2){
      classes.push('red')
    }
    
    if(this.state.persons.length<=1){
      classes.push('bold')
    }
    
    return (
      <StyleRoot>
      <div className="App">
        <p className={classes.join(' ')}>List of Persons!!</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler.bind(this)}>Toggle Persons</StyledButton>
        {personsList}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

