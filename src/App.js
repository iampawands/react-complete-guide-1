import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'
class App extends Component {
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
        <Person name='Pawan' Age='18'/>
        <Person name='Amsn' Age='19'>This is some random text inside component tags</Person>
        <Person name='Jaye' Age='20'/>
        
      </div>
    );
  }
}

export default App;

