import React, { Component } from 'react';
//in the latest version you have to use './App.module.css' and rename css fie also to this i.e. App.module.css file. No need of npm run eject and changing the config files.
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit'

class App extends Component {
  
  constructor(props){
    super(props);
    console.log('App constructor');
    
  }
  
  state = {
    persons : [
    {id:1,name:'Pawan',age:18},
    {id:2,name:'Amsn',age:18},
    {id:3,name:'Jaye',age:18}
    ],
    userName:'Pawan',
    showPersons : false,
      showCockpit: true
  }
  
  static getDerivedStateFromProps(props,state){
    console.log('App getDerivedStateFromProps',props);
    return state;
  }
  componentDidMount() {
    console.log('App componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
      console.log('App shouldComponentUpdate')
      return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('App componentDidUpdate')
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
    console.log('App render method');
    let personsList = null;
    
    if(this.state.showPersons){
      personsList = (
            <Persons personList={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeTextHandler}/>
        );   
    }
   return (
      <div className={classes.App}>
          <button onClick={()=>{this.setState({showCockpit:false})}}>Toggle Cockpit</button>
          {
              this.state.showCockpit?<Cockpit persons={this.state.persons} showPersons={this.state.showPersons}
                                              clicked={this.togglePersonHandler}/>:null
          }
        {personsList}
      </div>
    );
  }
}

export default App;

