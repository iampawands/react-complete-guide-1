import React, { Component } from 'react';
//in the latest version you have to use './App.module.css' and rename css fie also to this i.e. App.module.css file. No need of npm run eject and chaning the config files.
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Radium, { StyleRoot  } from 'radium'
import Cockpit from '../Components/Cockpit/Cockpit'

class App extends Component {
  
  constructor(props){
    super(props);
    console.log('this is in constructor');
    
  }
  
  state = {
    persons : [
    {id:1,name:'Pawan',age:18},
    {id:2,name:'Amsn',age:18},
    {id:3,name:'Jaye',age:18}
    ],
    userName:'Pawan',
    showPersons : false
  }
  
  static getDerivedStateFromProps(props,state){
    console.log('IN getDerivedStateFromProps',props);
    return state;
  }
  //this is deprecated.
  componentDidMount(){
      console.log('in componentDidMount');  
  }
  
  componentWillMount(){
    console.log('componentWillMount');
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
    let currentState = this.state.showPersons;
    console.log("App -> togglePersonHandler -> currentState", currentState)
    this.setState({
      showPersons:!currentState
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
    console.log('in render method');
    let personsList = null;
    
    if(this.state.showPersons){
      personsList = (
            <Persons personList={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeTextHandler}/>
        );   
    }
   return (
      <StyleRoot>
      <div className={classes.App}>
        <Cockpit persons={this.state.persons} showPersons={this.state.showPersons}
        clicked={this.togglePersonHandler}/>
        {personsList}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

