import React, { Component } from 'react';
//in the latest version you have to use './App.module.css' and rename css fie also to this i.e. App.module.css file. No need of npm run eject and chaning the config files.
import classes from './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot  } from 'radium'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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
    let btnClasses = [classes.Button]
    
    
    if(this.state.showPersons){
      personsList = (
            <div>
            {this.state.persons.map((person,index) => {
              return  <ErrorBoundary key={person.id}><Person 
              name={person.name} 
              Age={person.age}
              click={this.deletePersonHandler.bind(this,index)}
              textChange={ (event) => this.changeTextHandler(event,person.id)}
              /></ErrorBoundary>
            } )}
            </div>
        );
     
     btnClasses.push(classes.Red)   
    }
    
    let classList = [];
    
    if(this.state.persons.length<=2){
      classList.push(classes.red)
    }
    
    if(this.state.persons.length<=1){
      classList.push(classes.bold)
    }
    
    return (
      <StyleRoot>
      <div className={classes.App}>
        <p className={classList.join(' ')}>List of Persons!!</p>
        <button className={btnClasses.join(' ')} onClick={this.togglePersonHandler.bind(this)}>Toggle Persons</button>
        {personsList}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

