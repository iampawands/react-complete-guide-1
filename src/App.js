import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';


const app = () =>{
   const [personState,setPersonState] = useState({
    persons : [{name:'Pawan',age:18},
    {name:'Amsn',age:18},
    {name:'Jaye',age:18}
    ]
  });
  
  const changeState = () => {
    setPersonState({
    persons : [{name:'Pawanaa',age:44},
    {name:'Amsnaa',age:33},
    {name:'Jayeaa',age:22}
    ]
  });
  }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>#include world.h</code> and save to reload.
        </p>
        <Person name={personState.persons[0].name} Age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} Age={personState.persons[1].age}>Inside component tags</Person>
        <Person name={personState.persons[2].name} Age={personState.persons[2].age}/>
        
        <button onClick={changeState}>Change State</button>
      </div>
    );
}

export default app;

