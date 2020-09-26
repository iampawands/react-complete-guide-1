import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'
class App extends Component {
  state = {
    persons : [{name:'Pawan',age:18},
    {name:'Amsn',age:18},
    {name:'Jaye',age:18}
    ]
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>#include world.h</code> and save to reload.
        </p>
        <Person name={this.state.persons[0].name} Age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} Age={this.state.persons[1].age}>This is some random text inside component tags</Person>
        <Person name={this.state.persons[2].name} Age={this.state.persons[2].age}/>
        
      </div>
    );
  }
}

export default App;

