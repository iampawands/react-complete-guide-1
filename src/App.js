import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
class App extends Component {
  state = {
    persons : [{name:'Pawan',age:18},
    {name:'Amsn',age:18},
    {name:'Jaye',age:18}
    ]
  }
  
  changeState = (newName) => {
    this.setState({
    persons : [{name:newName,age:44},
    {name:'Amsnaa',age:33},
    {name:'Jayeaa',age:22}
    ]
  });
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
        <Person name={this.state.persons[1].name} Age={this.state.persons[1].age} click={this.changeState.bind(this,"abc")}>Inside component tags</Person>
        <Person name={this.state.persons[2].name} Age={this.state.persons[2].age}/>
        
        <button onClick={this.changeState.bind(this,"xyz")}>Change State</button>
      </div>
    );
  }
}

export default App;

